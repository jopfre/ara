import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import P from './p';

export default function MoodChart({ mood, ...rest }) {
  const map = {
    '-1': require('../assets/mood-icon.png'),
    0: require('../assets/happy-icon.png'),
    1: require('../assets/content-icon.png'),
    2: require('../assets/sad-icon.png'),
    3: require('../assets/angry-icon.png'),
  };

  return (
    <View className="border-4 border-green-200 p-4 mr-8 rounded-3xl" {...rest}>
      <P>Mood chart</P>
      <View className="flex flex-row">
        {mood ? (
          mood.map((day, index) => (
            <Image
              key={index}
              source={map[day]}
              contentFit="contain"
              className="w-[14%]"
              height={73}
            />
          ))
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </View>
  );
}
