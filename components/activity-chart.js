import { Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import P from "./p";

export default function ActivityChart({ loading, eaten, exercised, slept }) {
  const width = Dimensions.get("window").width;
  if (loading)
    return (
      <View className="px-8 py-12 mr-8">
        <P>Loading</P>
      </View>
    );
  return (
    <View
      className={`border-green-200 border-4 rounded-3xl flex-1 py-4 mr-8 items-center `}
    >
      {eaten || exercised || slept ? (
        <BarChart
          data={{
            datasets: [
              {
                data: [eaten, exercised, slept],
                colors: [
                  (opacity = 1) => "#58A360",
                  (opacity = 1) => "#58A360",
                  (opacity = 1) => "#58A360",
                ],
              },
            ],
          }}
          width={width - 96}
          height={220}
          withInnerLines={false}
          fromZero={true}
          fromNumber={7}
          withHorizontalLabels={false}
          style={{
            paddingRight: 0,
            paddingLeft: 0,
            marginLeft: -30,
            marginBottom: -20,
          }}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            backgroundGradientFromOpacity: 0,
            color: (opacity = 1) => `#58A360`,
            barRadius: 10,
            barPercentage: 2,
          }}
          flatColor={true}
          showBarTops={false}
          withCustomBarColorFromData={true}
        />
      ) : (
        <View className="px-8 py-12">
          <P>
            Please complete the daily check-in to start tracking your habits
          </P>
        </View>
      )}
      <View className="flex-row px-8 pt-4 border-t-4 border-green-200">
        <Image
          source={require("./../assets/food-icon.png")}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
        <Image
          source={require("./../assets/exercise-icon.png")}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
        <Image
          source={require("./../assets/sleep-icon.png")}
          className="flex-1 w-1/6 h-[32px]"
          contentFit="contain"
        />
      </View>
    </View>
  );
}
