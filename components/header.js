import { View } from 'react-native';
import BackButton from './back-button';
import H1 from './h1';
export default function Header({ children }) {
  return (
    <View className="flex-1 flex-row relative w-full justify-center">
      <View className="absolute left-0">
        <BackButton />
      </View>

      <H1 className="-translate-y-2">{children}</H1>
    </View>
  );
}
