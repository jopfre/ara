// import { useCallback } from 'react';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import LinkButton from '../components/link-button';
import H1 from '../components/h1';
const Logo = require('./../assets/logo.png');
const CheckIn = require('./../assets/check-in.png');

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
        <Image
          source={Logo}
          style={{
            flex: 1,
          }}
          contentFit="contain"
        />
      </View>

      <H1>Welcome back!</H1>

      <LinkButton href="/checkin/mood" title="Daily Check-in" />
      {/* <View
        style={{
          width: '100%',
          flex: 2,
        }}
      >
        <Image
          source={CheckIn}
          style={{
            flex: 1,
          }}
          contentFit="contain"
        />
      </View> */}
      <LinkButton href="/home" title="Home" />
    </>
  );
}
