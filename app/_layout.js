import { Slot } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 64,
        paddingBottom: 32,
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}
