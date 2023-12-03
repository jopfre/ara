import { Slot } from 'expo-router';
import { useSegments } from 'expo-router';
import CheckinHeader from '../../components/checkin/checkin-header';

export default function CheckInLayout() {
  const screens = ['mood', 'yourself', 'others', 'eaten', 'exercised', 'sleep'];
  const segments = useSegments();
  const index = screens.indexOf(segments[1]) + 1;
  return (
    <>
      <CheckinHeader progress={index / screens.length} />
      <Slot />
    </>
  );
}
