import Button from "../../components/button";
import CheckinImage from "../../components/checkin/checkin-image";
const garden1 = require("../../assets/garden-1.png");
const garden2 = require("../../assets/garden-2.png");
const garden3 = require("../../assets/garden-3.png");
import P from "../../components/p";
import React, { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getCurrentDate, daysAgo } from "../../utils/date";
import H1 from "../../components/h1";
import ButtonText from "../../components/button-text";
export default function Streak() {
  const date = getCurrentDate();

  const [streak, setStreak] = useState(0);

  let garden = garden1;
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
    garden = garden2;
    title = "Nice one!";
    text = "Keep growing your garden";
  }
  if (streak > 28 * 2) {
    garden = garden3;
    title = "Great job!";
    text = "Your garden has grown so much";
  }

  return (
    <>
      <CheckinImage source={garden} />
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
