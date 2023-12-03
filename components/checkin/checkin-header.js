import { View } from 'react-native';
import BackButton from '../back-button';
import ProgressBar from 'react-native-progress/Bar';

export default function CheckinHeader({ title, progress }) {
  return (
    <View className="flex-row justify-between items-center w-full">
      <BackButton />
      <View className="ml-4 -mt-2 rounded-2xl h-8 flex-1 bg-green-200 shadow">
        <View className="h-8 justify-center px-1">
          <ProgressBar
            progress={progress}
            width={null}
            height={24}
            borderRadius={16}
            borderWidth={0}
            color="#14a548"
          />
        </View>
      </View>
    </View>
  );
}
