import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/exercised.png');
import P from '../../components/p';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getCurrentDate } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';
import ButtonText from '../../components/button-text';
export default function Exercised() {
  const date = getCurrentDate();

  const [value, setValue] = useState(null);
  const { getItem, mergeItem } = useAsyncStorage(date);

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await mergeItem(JSON.stringify(newValue));
    setValue(newValue);
    router.push('checkin/sleep');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <>
      <CheckinImage source={Garden} />
      <H1>Have you exercised today?</H1>
      <P>
        Research shows that physical activity can also boost self-esteem, mood,
        sleep quality and energy, as well as reducing risk of stress, clinical
        depression, dementia and Alzheimer’s disease.
      </P>

      <Button
        active={value?.exercised === 1}
        onPress={() => writeItemToStorage({ exercised: 1 })}
      >
        <ButtonText>Yes</ButtonText>
      </Button>
      <Button
        active={value?.exercised === 0}
        onPress={() => writeItemToStorage({ exercised: 0 })}
      >
        <ButtonText>No</ButtonText>
      </Button>
    </>
  );
}
