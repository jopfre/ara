import { View } from 'react-native';
import Button from '../../components/button';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import getCurrentDateFormatted from '../../utils/getCurrentDateFormatted';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function CheckIn() {
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
    router.push('checkin/yourself');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <>
      <H1>How do you feel today?</H1>
      <View style={{ width: '100%' }}>
        <Button
          title="Happy"
          active={value?.mood === 0}
          onPress={() => writeItemToStorage({ mood: 0 })}
        />
        <Button
          title="Content"
          active={value?.mood === 1}
          onPress={() => writeItemToStorage({ mood: 1 })}
        />
        <Button
          title="Angry"
          active={value?.mood === 2}
          onPress={() => writeItemToStorage({ mood: 2 })}
        />
        <Button
          title="Sad"
          active={value?.mood === 3}
          onPress={() => writeItemToStorage({ mood: 3 })}
        />
      </View>
    </>
  );
}
