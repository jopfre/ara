import { useEffect, useRef } from "react";
import { View, Dimensions } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function StreakAnimation({ progress }) {
  const { width } = Dimensions.get("window");
  const video = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      video.current.pauseAsync();
    }, progress * 2 * 2583),
      [];
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Video
        ref={video}
        style={{
          alignSelf: "center",
          width: width - 32,
          height: ((width - 32) * 1676) / 2400,
        }}
        shouldPlay={true}
        source={require("../assets/video/streak-1.mp4")}
        resizeMode={ResizeMode.CONTAIN}
        rate={0.5}
      />
    </View>
  );
}
