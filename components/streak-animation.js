const frames = [
  require("../assets/animation/AraAnim01.png"),
  require("../assets/animation/AraAnim02.png"),
  require("../assets/animation/AraAnim03.png"),
  require("../assets/animation/AraAnim04.png"),
  require("../assets/animation/AraAnim05.png"),
  require("../assets/animation/AraAnim06.png"),
  require("../assets/animation/AraAnim07.png"),
  require("../assets/animation/AraAnim08.png"),
  require("../assets/animation/AraAnim09.png"),
  require("../assets/animation/AraAnim10.png"),
  require("../assets/animation/AraAnim11.png"),
  require("../assets/animation/AraAnim12.png"),
  require("../assets/animation/AraAnim13.png"),
  require("../assets/animation/AraAnim14.png"),
  require("../assets/animation/AraAnim15.png"),
  require("../assets/animation/AraAnim16.png"),
  require("../assets/animation/AraAnim17.png"),
  require("../assets/animation/AraAnim18.png"),
  require("../assets/animation/AraAnim19.png"),
  require("../assets/animation/AraAnim20.png"),
  require("../assets/animation/AraAnim21.png"),
  require("../assets/animation/AraAnim22.png"),
  require("../assets/animation/AraAnim23.png"),
  require("../assets/animation/AraAnim24.png"),
  require("../assets/animation/AraAnim25.png"),
  require("../assets/animation/AraAnim26.png"),
  require("../assets/animation/AraAnim27.png"),
  require("../assets/animation/AraAnim28.png"),
  require("../assets/animation/AraAnim29.png"),
  require("../assets/animation/AraAnim30.png"),
  require("../assets/animation/AraAnim31.png"),
  require("../assets/animation/AraAnim32.png"),
  require("../assets/animation/AraAnim33.png"),
  require("../assets/animation/AraAnim34.png"),
  require("../assets/animation/AraAnim35.png"),
  require("../assets/animation/AraAnim36.png"),
  require("../assets/animation/AraAnim37.png"),
  require("../assets/animation/AraAnim38.png"),
  require("../assets/animation/AraAnim39.png"),
  require("../assets/animation/AraAnim40.png"),
  require("../assets/animation/AraAnim41.png"),
  require("../assets/animation/AraAnim42.png"),
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
