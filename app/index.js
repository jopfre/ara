import { View } from "react-native";

import { Image } from "expo-image";
import Button from "../components/button";
import H1 from "../components/h1";
import ButtonText from "../components/button-text";
import CheckInButton from "../components/checkin-button";
// import StreakAnimation from "../components/streak-animation";
// import { ImageBackground } from "react-native";
export default function Index() {
  return (
    <>
      {/* <ImageBackground
        source={require("../assets/circle.png")}
        className="mt-4 mb-12 h-[200px] w-[200px]"
        resizeMode="contain"
      >
        <StreakAnimation progress={1 / (28 * 3)} />
      </ImageBackground> */}

      <View className="w-[60%] h-[150px]">
        <Image
          source={require("./../assets/logo.png")}
          className="flex-1"
          contentFit="contain"
        />
      </View>
      <H1>Welcome back!</H1>
      <CheckInButton image={true} />
      <Button href="/home">
        <ButtonText>Home</ButtonText>
      </Button>
    </>
  );
}
