// import { useCallback } from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/button';
import H1 from '../components/h1';
const Logo = require('./../assets/logo.png');
const Checkin = require('./../assets/checkin.png');

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <>
      {/* <View onLayout={onLayoutRootView}> */}
      <View
        style={{
          width: '60%',
          flex: 1,
        }}
      >
        <Image source={Logo} className="flex-1" contentFit="contain" />
      </View>

      <H1>Welcome back!</H1>

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
