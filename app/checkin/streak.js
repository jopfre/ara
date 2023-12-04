import { View } from 'react-native';
import Button from '../../components/button';
import CheckinImage from '../../components/checkin/checkin-image';
const garden1 = require('../../assets/garden-1.png');
const garden2 = require('../../assets/garden-2.png');
const garden3 = require('../../assets/garden-3.png');
import P from '../../components/p';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentDate, daysAgo } from '../../utils/date';
import { router } from 'expo-router';
import H1 from '../../components/h1';

export default function Streak() {
  const date = getCurrentDate();

  const [streak, setStreak] = useState(0);

  let garden = garden1;
  let title = 'Well done';
  let text = 'You’ve started growing your garden';

  useEffect(() => {
    getAllKeys();
  }, []);

  getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    if (keys[0]) {
      setStreak(daysAgo(keys[0]));
      // setStreak(64);
    }
  };
  if (streak > 28) {
    garden = garden2;
    title = 'Nice one!';
    text = 'Keep growing your garden';
  }
  if (streak > 28 * 2) {
    garden = garden3;
    title = 'Great job!';
    text = 'Your garden has grown so much';
  }

  return (
    <>
      <CheckinImage source={garden} />
      <H1>{title}</H1>
      <P>{text}</P>
      <P>The more you use the app the more it will grow!</P>
      <P>
        Current streak: {streak + 1} day{streak > 0 && 's'}
      </P>
      <Button title="Home" href="/home" />
    </>
  );
}
