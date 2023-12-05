import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';

import { Image } from 'expo-image';
// import Button from '../components/button';
import Button from '../components/button-test';
import H1 from '../components/h1';
const Logo = require('./../assets/logo.png');
const Checkin = require('./../assets/checkin.png');

export default function Index() {
  return (
    <>
      <View className="w-[60%] h-[150px]">
        <Image source={Logo} className="flex-1" contentFit="contain" />
      </View>
      <H1>Welcome back!</H1>
      {/* <Button2 /> */}
      <Button
        href="/checkin/mood"
        image={Checkin}
        title="Daily Check-in"
        height={300}
      />
      <Button href="/home" title="Home" />
    </>
  );
}
