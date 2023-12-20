import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import ActivityChart from './activity-chart';
import MoodChart from './mood-chart';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ActionChart from './action-chart';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function Charts() {
  const [data, setData] = useState(null);
  const [mood, setMood] = useState(null);
  const [loading, setLoading] = useState(true);

  getMyObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log('Done.');
  };

  useEffect(() => {
    getAllKeys();
  }, []);

  function calculateSums(data) {
    return data.reduce((sums, obj) => {
      // Iterate through each key in the object
      Object.keys(obj).forEach((key) => {
        // If the key doesn't exist in the sums object, initialize it with the value
        sums[key] = (sums[key] || 0) + obj[key];
      });

      // Return the updated sums object for the next iteration
      return sums;
    }, {});
  }
  getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    if (keys.length) {
      const storageData = await Promise.all(
        keys.slice(-7).map((date) => getMyObject(date)),
      );
      const summedData = calculateSums(storageData);
      setData(summedData);
      console.log(summedData);
      let mood = storageData.map((day) => day.mood);
      // pad the mood array if we dont yet have enough data
      while (mood.length < 7) {
        mood.unshift(-1);
      }

      setMood(mood);
    }
    setLoading(false);
  };
  const width = Dimensions.get('window').width;

  const [autoPlay, setAutoPlay] = useState(false);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);
  const baseOptions = {
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  };

  const slides = [
    <ActivityChart
      loading={loading}
      eaten={data?.eaten}
      exercised={data?.exercised}
      slept={data?.sleep}
    />,
    <MoodChart mood={mood} />,
    <ActionChart self={0} others={7} />,
  ];
  return (
    <View className="flex-1">
      <Carousel
        loop
        width={width}
        height={293}
        data={[...new Array(3).keys()]}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => {
        //   console.log('current index:', index);
        // }}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        renderItem={({ index }) => slides[index]}
      />
      <View className="mt-4 flex-row justify-between w-16 self-center">
        {colors.map((backgroundColor, index) => {
          return (
            <PaginationItem
              backgroundColor={backgroundColor}
              animValue={progressValue}
              index={index}
              key={index}
              length={colors.length}
            />
          );
        })}
      </View>
    </View>
  );
}

const PAGE_WIDTH = window.width;
const colors = ['#b8e3a5', '#b8e3a5', '#b8e3a5'];

function PaginationItem({ index, backgroundColor, length, animValue }) {
  const width = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-width, 0, width];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-width, 0, width];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: '#d4d4d4',
        width,
        height: width,
        borderRadius: 50,
        overflow: 'hidden',
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
}
