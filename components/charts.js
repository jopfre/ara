import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import ActivityChart from "./activity-chart";
import MoodChart from "./mood-chart";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import ActionChart from "./action-chart";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

function getRecentData(data) {
  const sortedKeys = Object.keys(data).sort(
    (a, b) => new Date(b) - new Date(a)
  );
  const recentKeys = sortedKeys.slice(0, 7);

  const recentData = {};
  recentKeys.forEach((key) => {
    recentData[key] = data[key];
  });

  return recentData;
}

function extractMoodValues(data) {
  const moodValues = [];

  for (const date in data) {
    if (data.hasOwnProperty(date) && data[date].hasOwnProperty("mood")) {
      moodValues.push(data[date]["mood"]);
    }
  }

  return moodValues;
}

export default function Charts() {
  const { getItem } = useAsyncStorage("checkin");

  const readItemFromStorage = async () => {
    const item = await getItem();

    if (item) {
      const storageData = JSON.parse(item);
      // const storageData = {
      //   "2024-01-13": {
      //     eaten: 1,
      //     exercised: 1,
      //     mood: 0,
      //     others: 1,
      //     yourself: 1,
      //     sleep: 1,
      //   },
      //   "2024-01-12": {
      //     eaten: 1,
      //     exercised: 1,
      //     mood: 0,
      //     others: 1,
      //     yourself: 1,
      //     sleep: 1,
      //   },
      //   "2024-01-11": {
      //     eaten: 1,
      //     exercised: 1,
      //     mood: 0,
      //     others: 1,
      //     yourself: 1,
      //     sleep: 1,
      //   },
      // };
      const recentData = getRecentData(storageData);

      if (recentData) {
        const summedData = calculateSums(recentData);

        setData(summedData);
        let mood = extractMoodValues(recentData);

        // pad the mood array if we dont yet have enough data
        while (mood.length < 7) {
          mood.unshift(-1);
        }

        setMood(mood);
      }
    }
    setLoading(false);
  };

  const [data, setData] = useState(null);
  const [mood, setMood] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    readItemFromStorage();
  }, []);

  function calculateSums(data) {
    const sums = {};

    for (const date in data) {
      if (data.hasOwnProperty(date)) {
        const activities = data[date];

        for (const activity in activities) {
          if (activities.hasOwnProperty(activity)) {
            sums[activity] = (sums[activity] || 0) + activities[activity];
          }
        }
      }
    }

    return sums;
  }

  const width = Dimensions.get("window").width;

  const progressValue = useSharedValue(0);

  const slides = [
    <ActivityChart
      loading={loading}
      eaten={data?.eaten}
      exercised={data?.exercised}
      slept={data?.sleep}
    />,
    <MoodChart mood={mood} loading={loading} />,
    <ActionChart self={data?.yourself} others={data?.others} />,
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

const colors = ["#b8e3a5", "#b8e3a5", "#b8e3a5"];

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
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: "#d4d4d4",
        width,
        height: width,
        borderRadius: 50,
        overflow: "hidden",
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
