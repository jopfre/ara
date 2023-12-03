import { Slot } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Slot />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
