import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/others.png');

import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getCurrentDate } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function Others() {
  const date = getCurrentDate();

  const [value, setValue] = useState(null);
  const { getItem, setItem } = useAsyncStorage(date);

  const readItemFromStorage = async () => {
    const item = await getItem();
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await setItem(JSON.stringify(newValue));
    setValue(newValue);
    router.push('checkin/eaten');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);
  return (
    <>
      <CheckinImage source={Garden} />
      <H1>Have you done anything for others today?</H1>

      <Button
        title="Yes"
        active={value?.others === 1}
        onPress={() => writeItemToStorage({ others: 1 })}
      />
      <Button
        title="No"
        active={value?.others === 0}
        onPress={() => writeItemToStorage({ others: 0 })}
      />
    </>
  );
}
