import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import ActivityChart from './activity-chart';
import MoodChart from './mood-chart';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
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

  const slides = [
    <ActivityChart
      loading={loading}
      eaten={data?.eaten}
      exercised={data?.exercised}
      slept={data?.sleep}
    />,
    <MoodChart mood={mood} />,
  ];
  return (
    <View className="flex-1">
      <Carousel
        loop
        width={width}
        height={293}
        // autoPlay={true}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => slides[index]}
      />
    </View>
  );
}
