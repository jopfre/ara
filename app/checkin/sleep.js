import { View } from "react-native";
import Button from "../../components/button";
import CheckinImage from "../../components/checkin/checkin-image";
const Garden = require("../../assets/sleep.png");
import P from "../../components/p";
import React, { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../../utils/date";
import { router } from "expo-router";
import H1 from "../../components/h1";
import ButtonText from "../../components/button-text";
export default function Sleep() {
  const date = getCurrentDate();

  const [value, setValue] = useState(null);
  // const { getItem, mergeItem } = useAsyncStorage(date);
  const { getItem, mergeItem } = useAsyncStorage("checkin");

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    // await mergeItem(JSON.stringify(newValue));
    await mergeItem(JSON.stringify({ [date]: newValue }));
    console.log(newValue);
    setValue(newValue);
    router.push("checkin/streak");
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <>
      <CheckinImage source={Garden} />
      <H1>How is your sleep?</H1>
      <P>
        A few sleepless nights are usually nothing to worry about, but it can
        become an issue if a lack of sleep starts to affect your daily life.
      </P>

      <Button
        active={value?.sleep === 0}
        onPress={() => writeItemToStorage({ sleep: 0 })}
      >
        <ButtonText>0-4 hours</ButtonText>
      </Button>
      <Button
        active={value?.sleep === 1}
        onPress={() => writeItemToStorage({ sleep: 1 })}
      >
        <ButtonText>5-9 hours</ButtonText>
      </Button>
      <Button
        active={value?.sleep === 2}
        onPress={() => writeItemToStorage({ sleep: 2 })}
      >
        <ButtonText>10+ hours</ButtonText>
      </Button>
    </>
  );
}
