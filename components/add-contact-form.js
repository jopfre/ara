import { useState } from 'react';
import { View, TextInput } from 'react-native';
import Button from './button';
import ButtonText from './button-text';
import Label from './label';
import H1 from './h1';
export default function AddContactForm({ setModalVisible }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = () => {
    // Handle adding the contact logic here
    console.log(`Name: ${name}, Number: ${number}`);
    setModalVisible(false);
    // You can add your logic to store the contact data, e.g., in state or send it to a server.
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
