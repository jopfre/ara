import { View, TextInput } from 'react-native';
import Button from './button';
import ButtonText from './button-text';
import Label from './label';
import H1 from './h1';

import { useState, useEffect } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function AddContactForm({ setModalVisible }) {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);

  const { mergeItem } = useAsyncStorage('contacts');

  const writeItemToStorage = async (newValue) => {
    await mergeItem(JSON.stringify(newValue));
  };

  const handleAddContact = () => {
    writeItemToStorage({ [name]: number });
    setModalVisible(false);
  };

  return (
    <View>
      <H1 className="mb-8">Add contact</H1>
      <Label>Name:</Label>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        className="bg-green-50 font-comfortaa text-lg p-2 text-green-950 mt-2 mb-6"
      />

      <Label>Number:</Label>
      <TextInput
        value={number}
        onChangeText={(text) => setNumber(text)}
        className="bg-green-50 font-comfortaa text-lg p-2 text-green-950 my-2"
        keyboardType="numeric"
      />

      <Button onPress={handleAddContact}>
        <ButtonText>Add contact</ButtonText>
      </Button>
    </View>
  );
}
