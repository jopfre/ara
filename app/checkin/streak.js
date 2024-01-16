import Button from "../../components/button";

import P from "../../components/p";
import React, { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { daysAgo } from "../../utils/date";
import H1 from "../../components/h1";
import ButtonText from "../../components/button-text";
import StreakAnimation from "../../components/streak-animation";
import { ImageBackground } from "react-native";
export default function Streak() {
  const [streak, setStreak] = useState(0);

  let title = "Well done";
  let text = "You’ve started growing your garden";

  const { getItem } = useAsyncStorage("checkin");

  const readItemFromStorage = async () => {
    const item = await getItem();

    if (item) {
      setStreak(daysAgo(Object.keys(JSON.parse(item))[0]));
    }
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  if (streak > 28) {
    title = "Nice one!";
    text = "Keep growing your garden";
  }
  if (streak > 28 * 2) {
    title = "Great job!";
    text = "Your garden has grown so much";
  }

  return (
    <>
      <ImageBackground
        source={require("../../assets/circle.png")}
        className="mt-4 mb-12 h-[200px] w-[200px]"
        resizeMode="contain"
      >
        <StreakAnimation progress={streak / (28 * 3)} />

        {/* <StreakAnimation progress={1} /> */}
      </ImageBackground>
      <H1>{title}</H1>
      <P>{text}</P>
      <P>The more you use the app the more it will grow!</P>
      <P>
        Current streak: {streak + 1} day{streak > 0 && "s"}
      </P>
      <Button href="/home">
        <ButtonText>Home</ButtonText>
      </Button>
    </>
  );
}
