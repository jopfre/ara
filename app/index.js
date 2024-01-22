import { View } from "react-native";

import { Image } from "expo-image";
import Button from "../components/button";
import H1 from "../components/h1";
import ButtonText from "../components/button-text";
import CheckInButton from "../components/checkin-button";

export default function Index() {
  return (
    <>
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
