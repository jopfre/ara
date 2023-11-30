import { Slot } from 'expo-router';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BackButton from '../../components/back-button';

export default function CheckInLayout() {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 32,
        paddingBottom: 32,
        flex: 1,
        paddingHorizontal: 16,
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <BackButton />
        <Text>Progress</Text>
      </View>
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}
