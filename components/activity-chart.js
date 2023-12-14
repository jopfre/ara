import { Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Image } from 'expo-image';
import P from './p';
const food = require('./../assets/food-icon.png');
const exercise = require('./../assets/exercise-icon.png');
const sleep = require('./../assets/sleep-icon.png');
export default function ActivityChart() {
  const [data, setData] = useState(null);
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

      // Update the state with the new object
      setData(summedData);
      console.log(summedData);
    }
  };
  return (
    <View className="border-green-200 border-4 rounded-3xl py-4 items-center">
      {data ? (
        <BarChart
          data={{
            // labels: ['', 'Exercise', 'Sleep'],
            datasets: [
              {
                data: [data.eaten, data.exercised, data.sleep],
                colors: [
                  (opacity = 1) => '#58A360',
                  (opacity = 1) => '#58A360',
                  (opacity = 1) => '#58A360',
                ],
              },
            ],
          }}
          // width={Dimensions.get('window').width - 64}
          width={290}
          height={220}
          withInnerLines={false}
          fromZero={true}
          fromNumber={7}
          withHorizontalLabels={false}
          // className="-ml-8"
          style={{
            paddingRight: 0,
            paddingLeft: 0,
            marginLeft: -30,
            marginBottom: -20,
          }}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `#58A360`,
            barRadius: 10,
            barPercentage: 2,
          }}
          flatColor={true}
          showBarTops={false}
          withCustomBarColorFromData={true}
        />
      ) : (
        <View className="px-8 pt-8 pb-12">
          <P>
            Please complete the daily check-in to start tracking your habits
          </P>
        </View>
      )}
      <View className="flex-row px-8 pt-4 border-t-4 border-green-200">
        <Image
          source={food}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
        <Image
          source={exercise}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
        <Image
          source={sleep}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
      </View>
    </View>
  );
}
