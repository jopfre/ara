import { Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { Image } from 'expo-image';
const food = require('./../assets/food-icon.png');
const exercise = require('./../assets/exercise-icon.png');
const sleep = require('./../assets/sleep-icon.png');
export default function ActivityChart() {
  const data = {
    labels: ['Food', 'Exercise', 'Sleep'],
    datasets: [
      {
        data: [20, 45, 28],
        colors: [
          (opacity = 1) => '#58A360',
          (opacity = 1) => '#58A360',
          (opacity = 1) => '#58A360',
        ],
      },
    ],
  };
  return (
    <>
      <BarChart
        data={data}
        width={Dimensions.get('window').width - 32}
        height={220}
        withInnerLines={false}
        fromZero={true}
        withHorizontalLabels={false}
        style={{ paddingRight: 0, marginLeft: -5 }}
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
      <View className="flex-row">
        <Image
          source={food}
          className="flex-1 w-1/6 h-[50px]"
          contentFit="contain"
        />
        <Image
          source={exercise}
          className="flex-1 w-1/6 h-[50px]"
          contentFit="contain"
        />
        <Image
          source={sleep}
          className="flex-1 w-1/6 h-[50px]"
          contentFit="contain"
        />
      </View>
    </>
  );
}
