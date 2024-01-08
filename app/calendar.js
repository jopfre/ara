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
import { useState } from "react";
import { getCurrentDate, formatDate } from "../utils/date";
import Button from "../components/button";
import ButtonImage from "../components/button-image";
import H2 from "../components/h2";
export default function AraCalendar() {
  const { height } = Dimensions.get("screen");
  const [date, setDate] = useState(getCurrentDate());
  return (
    <>
      <Header>Calendar</Header>
      {/* <Header style={{ marginHorizontal: 8 }}>Calendar</Header> */}
      <Calendar
        theme={{
          textMonthFontFamily: "Comfortaa",
          textDayFontFamily: "Comfortaa",
          todayButtonFontFamily: "Comfortaa",
          dayTextColor: "rgb(7,41,20)",
          monthTextColor: "rgb(7,41,20)",
          // todayTextColor: "rgb(7,41,20)",
          arrowColor: "rgb(7,41,20)",
          // selectedDayTextColor: "rgb(7,41,20)",
        }}
        onDayPress={(date) => {
          setDate(date.dateString);
        }}
      />
      <View>
        <H2>{formatDate(date)}</H2>
      </View>

      <Button onPress={() => {}} height={70} width={70}>
        <ButtonImage source={require("../assets/add.png")} className="w-8" />
      </Button>
      {/* <Modal modalVisible={true} text="dog" /> */}
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
