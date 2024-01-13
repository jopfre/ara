import { View } from "react-native";
import Button from "../../components/button";
import CheckinImage from "../../components/checkin/checkin-image";
const Garden = require("../../assets/eaten.png");
import P from "../../components/p";
import React, { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../../utils/date";
import { router } from "expo-router";
import H1 from "../../components/h1";
import ButtonText from "../../components/button-text";

export default function Eaten() {
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

    setValue(newValue);
    router.push("checkin/exercised");
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <>
      <CheckinImage source={Garden} />
      <H1>Have you eaten today?</H1>
      <P>
        Eating a healthy, balanced diet is an important part of maintaining good
        health and can help you feel your best.
      </P>

      <Button
        active={value?.eaten === 1}
        onPress={() => writeItemToStorage({ eaten: 1 })}
      >
        <ButtonText>Yes</ButtonText>
      </Button>
      <Button
        active={value?.eaten === 0}
        onPress={() => writeItemToStorage({ eaten: 0 })}
      >
        <ButtonText>No</ButtonText>
      </Button>
    </>
  );
}
