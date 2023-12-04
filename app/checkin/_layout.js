import { Slot } from 'expo-router';
import { useSegments } from 'expo-router';
import CheckinHeader from '../../components/checkin/checkin-header';
import { View } from 'react-native';

export default function CheckInLayout() {
  const screens = ['mood', 'yourself', 'others', 'eaten', 'exercised', 'sleep'];
  const segments = useSegments();
  const route = segments[1];
  const index = screens.indexOf(route) + 1;
  return (
    <View className="px-4 flex-1 w-full items-center">
      {route === 'streak' ? (
        <View className="h-[64px]" />
      ) : (
        <CheckinHeader progress={index / screens.length} />
      )}
      <Slot />
    </View>
  );
}
