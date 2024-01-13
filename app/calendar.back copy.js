import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarProvider,
} from "react-native-calendars";
import Header from "../components/header";
import Modal from "../components/modal";
// import AgendaScreen from "../components/agendaScreen";
import { Dimensions, Text, View } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { getCurrentDate, formatDate } from "../utils/date";
import Button from "../components/button";
import ButtonImage from "../components/button-image";
import H2 from "../components/h2";

import AddEventForm from "../components/add-event-form";

import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";

function filterObjectKeysByDate(obj, filterDate) {
  const filteredObject = {};

  // Set hours, minutes, seconds, and milliseconds to 0 for both dates
  filterDate.setHours(0, 0, 0, 0);
  // console.log(Object.keys(obj));
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const keyDate = new Date(key);
      // console.log(keyDate);

      // Set hours, minutes, seconds, and milliseconds to 0 for keyDate
      keyDate.setHours(0, 0, 0, 0);
      console.log(keyDate, filterDate);
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
  const { height } = Dimensions.get("screen");
  const [date, setDate] = useState(new Date(getCurrentDate()));
  const [modalVisible, setModalVisible] = useState(false);
  // const [markedDates, setMarkedDates] = useState({});
  const [events, setEvents] = useState({});
  const { getItem } = useAsyncStorage("events");

  const readItemFromStorage = async () => {
    const item = await getItem();
    console.log(date);
    console.log(item);
    if (item) {
      const selectedDateEvents = filterObjectKeysByDate(
        JSON.parse(item),
        new Date(date)
      );
      const sortedSelectedDateEvents = sortObjectKeys(selectedDateEvents);
      setEvents(sortedSelectedDateEvents);
    }
  };

  const marked = useMemo(() => {
    return {
      // [getDate(-1)]: {
      //   dotColor: 'red',
      //   marked: true
      // },
      [date]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "orange",
        selectedTextColor: "red",
      },
    };
  }, [date]);

  useEffect(() => {
    readItemFromStorage();
  }, [modalVisible, date]);

  return (
    <>
      {console.log(marked)}
      <Header>Calendar</Header>
      <Calendar
        style={{ transform: "scale(1.5)", marginTop: 64, marginBottom: 128 }}
        theme={{
          textMonthFontFamily: "Comfortaa",
          textDayFontFamily: "Comfortaa",
          todayButtonFontFamily: "Comfortaa",
          dayTextColor: "rgb(7,41,20)",
          monthTextColor: "rgb(7,41,20)",
          // todayTextColor: "#EB8A59",
          arrowColor: "rgb(7,41,20)",
          // selectedDayTextColor: "#EB8A59",
          // textDayFontSize: 24,
          dotColor: "#52C46F",
          selectedDayBackgroundColor: "#EB8A59",
          // "stylesheet.day.basic": {
          //   base: {
          //     width: ,
          //     height: 42,
          //   },
          // },
        }}
        // markedDates={markedDates}
        markedDates={marked}
        onDayPress={(date) => {
          setDate(new Date(date.dateString));
        }}
      />
      <View>
        <H2>{formatDate(date)}</H2>
        {Object.entries(events).map(([key, value]) => (
          <View key={key}>
            <Text>{getTimeFromDate(key)}</Text>
            <Text>{value.title}</Text>
            <Text>{value.info}</Text>
          </View>
        ))}

        <Button
          onPress={() => {
            setModalVisible(true);
          }}
          height={70}
          width={70}
        >
          <ButtonImage source={require("../assets/add.png")} className="w-8" />
        </Button>
      </View>

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AddEventForm date={date} setModalVisible={setModalVisible} />
      </Modal>
      {/* <AgendaScreen /> */}
      {/* <View style={{ height: height - 170 }} className="w-full">
        <Agenda
          items={{
            "2024-01-08": ["Meeting with Ella 9:30"],
            "2024-01-09": ["Meeting with Ella 11:30"],
            "2024-01-07": [],
          }}
          renderEmptyDate={() => {
            return (
              <View>
                <Text>This is empty date!</Text>
              </View>
            );
          }}
          // renderDay={(day, item) => {
          //   console.log(item);
          //   return <Text>{item}</Text>;
          // }}
          renderEmptyData={() => {
            return (
              <View>
                <Text>empty data</Text>
              </View>
            );
          }}
        />
      </View> */}
    </>
  );
}
