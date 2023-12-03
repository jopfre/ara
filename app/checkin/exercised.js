import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/exercised.png');
import P from '../../components/p';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import getCurrentDateFormatted from '../../utils/getCurrentDateFormatted';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function Exercised() {
  const date = getCurrentDateFormatted();

  const [value, setValue] = useState(null);
  const { getItem, setItem } = useAsyncStorage(date);

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await setItem(JSON.stringify(newValue));
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
        title="Yes"
        active={value?.exercised === 1}
        onPress={() => writeItemToStorage({ exercised: 1 })}
      />
      <Button
        title="No"
        active={value?.exercised === 0}
        onPress={() => writeItemToStorage({ exercised: 0 })}
      />
    </>
  );
}
