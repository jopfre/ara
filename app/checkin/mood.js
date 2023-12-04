import { View } from 'react-native';
import Button from '../../components/button';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getCurrentDate } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';
const happy = require('../../assets/happy.png');
const content = require('../../assets/content.png');
const angry = require('../../assets/angry.png');
const sad = require('../../assets/sad.png');

export default function CheckIn() {
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
    router.push('checkin/yourself');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <>
      <H1>How do you feel today?</H1>
      <View className="flex-row flex-1 mb-" style={{ gap: 16 }}>
        <Button
          title="Happy"
          active={value?.mood === 0}
          onPress={() => writeItemToStorage({ mood: 0 })}
          image={happy}
          height={250}
          style={{ width: '50%' }}
        />
        <Button
          title="Content"
          active={value?.mood === 1}
          onPress={() => writeItemToStorage({ mood: 1 })}
          image={content}
          height={250}
          style={{ width: '50%' }}
        />
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          title="Angry"
          active={value?.mood === 2}
          onPress={() => writeItemToStorage({ mood: 2 })}
          image={angry}
          height={250}
          style={{ width: '50%' }}
        />
        <Button
          title="Sad"
          active={value?.mood === 3}
          onPress={() => writeItemToStorage({ mood: 3 })}
          image={sad}
          height={250}
          style={{ width: '50%' }}
        />
      </View>
    </>
  );
}
