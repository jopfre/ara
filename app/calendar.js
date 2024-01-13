import { CalendarUtils } from "react-native-calendars";
import Header from "../components/header";
import Modal from "../components/modal";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { getCurrentDate, formatDate } from "../utils/date";
import Button from "../components/button";
import ButtonImage from "../components/button-image";
import H2 from "../components/h2";
import P from "../components/p";

import AddEventForm from "../components/add-event-form";

import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import CalendarComponent from "../components/calendar";

function filterObjectKeysByDate(obj, filterDate) {
  const filteredObject = {};

  filterDate.setHours(0, 0, 0, 0);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const keyDate = new Date(key);

      keyDate.setHours(0, 0, 0, 0);
      if (
        !isNaN(keyDate.getTime()) &&
        keyDate.getTime() === filterDate.getTime()
      ) {
        filteredObject[key] = obj[key];
      }
    }
  }

  return filteredObject;
}

function sortObjectKeys(unordered) {
  return Object.keys(unordered)
    .sort()
    .reduce((obj, key) => {
      obj[key] = unordered[key];
      return obj;
    }, {});
}

function getTimeFromDate(dateString) {
  const dateObject = new Date(dateString);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  return formattedTime;
}

export default function AraCalendar() {
  const initialDate = CalendarUtils.getCalendarDateString(new Date());

  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [modalVisible, setModalVisible] = useState(false);
  // const [markedDates, setMarkedDates] = useState({});
  const [events, setEvents] = useState({});
  const { getItem } = useAsyncStorage("events");

  const readItemFromStorage = async () => {
    const item = await getItem();
    if (item) {
      const selectedDateEvents = filterObjectKeysByDate(
        JSON.parse(item),
        new Date(selectedDate)
      );
      const sortedSelectedDateEvents = sortObjectKeys(selectedDateEvents);
      setEvents(sortedSelectedDateEvents);
    }
    console.log(item);
  };

  useEffect(() => {
    readItemFromStorage();
  }, [modalVisible, selectedDate]);

  return (
    <>
      <Header>Calendar</Header>
      <CalendarComponent
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <View className="mt-4">
        <H2>{formatDate(selectedDate)}</H2>
        {Object.entries(events).map(([key, value]) => (
          <View key={key}>
            <P>{getTimeFromDate(key)}</P>
            <P>{value.title}</P>
            <P>{value.info}</P>
          </View>
        ))}

        <View className="flex-row justify-center">
          <Button
            onPress={() => {
              setModalVisible(true);
            }}
            height={70}
            width={70}
          >
            <ButtonImage
              source={require("../assets/add.png")}
              className="w-8"
            />
          </Button>
        </View>
      </View>

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AddEventForm date={selectedDate} setModalVisible={setModalVisible} />
      </Modal>
    </>
  );
}
