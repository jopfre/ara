import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/yourself.png');

import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import getCurrentDateFormatted from '../../utils/getCurrentDateFormatted';
import { router } from 'expo-router';
import H1 from '../../components/h1';
export default function Yourself() {
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
    router.push('checkin/others');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <>
      <CheckinImage source={Garden} />
      <H1>Have you done anything for yourself today?</H1>

      <Button
        title="Yes"
        active={value?.yourself === 1}
        onPress={() => writeItemToStorage({ yourself: 1 })}
      />
      <Button
        title="No"
        active={value?.yourself === 0}
        onPress={() => writeItemToStorage({ yourself: 0 })}
      />
    </>
  );
}
