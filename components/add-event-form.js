import { Text, Pressable, View, TextInput } from "react-native";
import Button from "./button";
import ButtonText from "./button-text";
import Label from "./label";
import H1 from "./h1";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function AddEventForm({ setModalVisible, date }) {
  let selectedDate = new Date(date);
  const currentDate = new Date();
  selectedDate.setHours(currentDate.getHours());
  const [title, setTitle] = useState(null);
  const [dateTime, setDateTime] = useState(selectedDate);
  const [info, setInfo] = useState(null);

  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const { mergeItem } = useAsyncStorage("events");

  const writeItemToStorage = async (newValue) => {
    await mergeItem(JSON.stringify(newValue));
  };

  const handleAddEvent = () => {
    writeItemToStorage({
      [dateTime.toISOString().replace(/['"]+/g, "")]: { title, info },
    });
    setModalVisible(false);
  };

  return (
    <View>
      <H1 className="mb-8">Add event</H1>
      <Label>Title:</Label>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        className="bg-green-50 font-comfortaa text-lg p-2 text-green-950 mt-2 mb-6"
      />

      <Label>Time</Label>
      <Pressable onPress={() => setTimePickerVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            className="bg-green-50 font-comfortaa text-lg p-2 text-green-950 mt-2
          mb-6"
            value={dateTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          />
        </View>
      </Pressable>

      {timePickerVisible && (
        <DateTimePicker
          value={dateTime}
          mode="time"
          is24Hour={true}
          onChange={({ nativeEvent }) => {
            setDateTime(new Date(nativeEvent.timestamp));
            setTimePickerVisible(false);
          }}
        />
      )}

      <Label>Info</Label>
      <TextInput
        value={info}
        onChangeText={(text) => setInfo(text)}
        className="bg-green-50 font-comfortaa text-lg p-2 text-green-950 my-2"
      />

      <Button onPress={handleAddEvent}>
        <ButtonText>Add event</ButtonText>
      </Button>
    </View>
  );
}
