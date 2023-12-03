import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/eaten.png');
import P from '../../components/p';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import getCurrentDateFormatted from '../../utils/getCurrentDateFormatted';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function Eaten() {
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
    router.push('checkin/exercised');
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
        title="Yes"
        active={value?.eaten === 1}
        onPress={() => writeItemToStorage({ eaten: 1 })}
      />
      <Button
        title="No"
        active={value?.eaten === 0}
        onPress={() => writeItemToStorage({ eaten: 0 })}
      />
    </>
  );
}
