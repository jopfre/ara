import { Slot } from 'expo-router';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1">
        <Slot />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
