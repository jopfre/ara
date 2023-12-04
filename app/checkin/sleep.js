import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const Garden = require('../../assets/sleep.png');
import P from '../../components/p';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getCurrentDate } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function Sleep() {
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
    router.push('checkin/streak');
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
        title="0-4 hours"
        active={value?.sleep === 0}
        onPress={() => writeItemToStorage({ sleep: 0 })}
      />
      <Button
        title="5-9 hours"
        active={value?.sleep === 1}
        onPress={() => writeItemToStorage({ sleep: 1 })}
      />
      <Button
        title="10+ hours"
        active={value?.sleep === 2}
        onPress={() => writeItemToStorage({ sleep: 2 })}
      />
    </>
  );
}
