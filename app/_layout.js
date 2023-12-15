import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'expo-image';

import { Slot } from 'expo-router';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const Splash = require('./../assets/splash.gif');

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function AppLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Comfortaa: require('../assets/fonts/Comfortaa-VariableFont_wght.ttf'),
  });

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

  if (!appIsReady || !fontsLoaded) {
    // if (!appIsReady) {
    return (
      <Image source={Splash} className="flex-1 w-full" contentFit="contain" />
    );
  }
  return (
    <SafeAreaView className="flex-1" onLayout={onLayoutRootView}>
      <ScrollView className="flex-1">
        <View className="items-center px-4 w-full pb-2">
          <Slot />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
