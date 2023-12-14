import { Text, View } from 'react-native';

import { Image } from 'expo-image';
import Button from '../components/button';
import H1 from '../components/h1';
import ButtonText from '../components/button-text';
import ButtonImage from '../components/button-image';
const Logo = require('./../assets/logo.png');

export default function Index() {
  return (
    <>
      <View className="w-[60%] h-[150px]">
        <Image source={Logo} className="flex-1" contentFit="contain" />
      </View>
      <H1>Welcome back!</H1>
      <Button href="/checkin/mood" height={300}>
        <ButtonImage source={require('./../assets/checkin.png')} />
        <ButtonText className="mt-6">Daily Check-in</ButtonText>
      </Button>
      <Button href="/home">
        <ButtonText>Home</ButtonText>
      </Button>
    </>
  );
}
