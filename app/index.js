import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
// import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Image } from 'expo-image';
import Button from '../components/button';
import H1 from '../components/h1';
const Logo = require('./../assets/logo.png');
const Splash = require('./../assets/splash.gif');
const Checkin = require('./../assets/checkin.png');

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <Image
        source={Splash}
        className="flex-1 w-full -mt-5"
        contentFit="contain"
      />
    );
  }

  return (
    <View
      onLayout={onLayoutRootView}
      className="w-full flex-1 items-center px-4"
    >
      <View className="w-[60%] h-[150px]">
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
    </View>
  );
}
