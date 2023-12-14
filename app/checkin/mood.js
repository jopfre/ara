import { View } from 'react-native';
import Button from '../../components/button';
import React, { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getCurrentDate } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';
import ButtonText from '../../components/button-text';
import ButtonImage from '../../components/button-image';
const content = require('../../assets/content.png');
const angry = require('../../assets/angry.png');
const sad = require('../../assets/sad.png');

export default function CheckIn() {
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
    router.push('checkin/yourself');
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <>
      <H1>How do you feel today?</H1>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          active={value?.mood === 0}
          onPress={() => writeItemToStorage({ mood: 0 })}
          height={250}
          style={{ flex: 1 }}
        >
          <ButtonText className="mb-6">Happy</ButtonText>
          <ButtonImage source={require('../../assets/happy.png')} />
        </Button>
        <Button
          active={value?.mood === 1}
          onPress={() => writeItemToStorage({ mood: 1 })}
          height={250}
          style={{ flex: 1 }}
        >
          <ButtonText className="mb-6">Content</ButtonText>
          <ButtonImage source={require('../../assets/content.png')} />
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          active={value?.mood === 2}
          onPress={() => writeItemToStorage({ mood: 2 })}
          height={250}
          style={{ flex: 1 }}
        >
          <ButtonText className="mb-6">Angry</ButtonText>
          <ButtonImage source={require('../../assets/angry.png')} />
        </Button>
        <Button
          active={value?.mood === 3}
          onPress={() => writeItemToStorage({ mood: 3 })}
          height={250}
          style={{ flex: 1 }}
        >
          <ButtonText className="mb-6">Sad</ButtonText>
          <ButtonImage source={require('../../assets/sad.png')} />
        </Button>
      </View>
    </>
  );
}
