const frames = [
  require("../assets/animation/Streak_V1-1.png"),
  require("../assets/animation/Streak_V1-2.png"),
  require("../assets/animation/Streak_V1-3.png"),
  require("../assets/animation/Streak_V1-4.png"),
  require("../assets/animation/Streak_V1-5.png"),
  require("../assets/animation/Streak_V1-6.png"),
  require("../assets/animation/Streak_V1-7.png"),
  require("../assets/animation/Streak_V1-8.png"),
  require("../assets/animation/Streak_V1-9.png"),
  require("../assets/animation/Streak_V1-10.png"),
  require("../assets/animation/Streak_V1-11.png"),
  require("../assets/animation/Streak_V1-12.png"),
  require("../assets/animation/Streak_V1-13.png"),
  require("../assets/animation/Streak_V1-14.png"),
  require("../assets/animation/Streak_V1-15.png"),
  require("../assets/animation/Streak_V1-16.png"),
  require("../assets/animation/Streak_V1-17.png"),
  require("../assets/animation/Streak_V1-18.png"),
  require("../assets/animation/Streak_V1-19.png"),
  require("../assets/animation/Streak_V1-20.png"),
  require("../assets/animation/Streak_V1-21.png"),
  require("../assets/animation/Streak_V2-1.png"),
  require("../assets/animation/Streak_V2-2.png"),
  require("../assets/animation/Streak_V2-3.png"),
  require("../assets/animation/Streak_V2-4.png"),
  require("../assets/animation/Streak_V2-5.png"),
  require("../assets/animation/Streak_V2-6.png"),
  require("../assets/animation/Streak_V2-7.png"),
  require("../assets/animation/Streak_V2-8.png"),
  require("../assets/animation/Streak_V2-9.png"),
  require("../assets/animation/Streak_V2-10.png"),
  require("../assets/animation/Streak_V3-1.png"),
  require("../assets/animation/Streak_V3-2.png"),
  require("../assets/animation/Streak_V3-3.png"),
  require("../assets/animation/Streak_V3-4.png"),
  require("../assets/animation/Streak_V3-5.png"),
  require("../assets/animation/Streak_V3-6.png"),
];

import { useEffect } from "react";
import { View, Animated, Easing, Dimensions } from "react-native";
import { Asset } from "expo-asset";
const length = frames.length;

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function StreakAnimation({ progress = 0 }) {
  const animations = new Animated.Value(0);
  const opacity = [];
  const { width } = Dimensions.get("window");

  frames.map((item, index) => {
    opacity.push(
      animations.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0],
      })
    );
  });

  useEffect(() => {
    // const cachedFrames = cacheImages(frames);
    // we substract 6 and then add it again so it always plays the first 6 frames
    Animated.timing(animations, {
      toValue: Math.floor(progress * (length - 6 - 1) + 6),
      // duration: 150 * length,
      duration: 200 * (progress * (length - 6 - 1) + 6),
      // easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        // width: width,
        // height: (width * 1668) / 2388,
        width: "100%",
        // transform: `translateX(-${width / 4}px)`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {frames.map((item, index) => {
        return (
          <Animated.Image
            key={index}
            source={frames[index]}
            style={{
              width: width,
              height: (width * 1668) / 2388,
              position: "absolute",
              opacity: opacity[index],
            }}
          />
        );
      })}
    </View>
  );
}
