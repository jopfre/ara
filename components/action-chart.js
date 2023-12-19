import { Text, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import P from './p';

export default function ActionChart({ self = 0, others = 0, loading = false }) {
  const width = Dimensions.get('window').width;
  const value = self / (self + others);

  if (loading)
    return (
      <View className="px-8 py-12">
        <P>Loading</P>
      </View>
    );
  return (
    <View
      className={`border-green-200 border-4 rounded-3xl flex-1 px-4 py-4 mr-8 items-center `}
    >
      <P>Done anything for yourself/others?</P>
      {self || others ? (
        <View className="flex-1 flex-row  items-center">
          <P>Others</P>
          <ProgressChart
            data={{
              data: [1, value],
              colors: ['#ffffff', '#58A360'],
            }}
            width={180}
            height={180}
            strokeWidth={32}
            radius={32}
            hideLegend={true}
            withCustomBarColorFromData={true}
            chartConfig={{
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              color: (opacity = 1, _index) => `#b8e3a5`,
            }}
          />
          <P>Yourself</P>
        </View>
      ) : (
        <View className="px-8 py-12">
          <P>
            Please complete the daily check-in to start tracking your habits
          </P>
        </View>
      )}
    </View>
  );
}
