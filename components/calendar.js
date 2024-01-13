import { useCallback, useMemo } from "react";
import { View, Dimensions } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";

export default function CalendarComponent({
  initialDate = CalendarUtils.getCalendarDateString(new Date()),
  selectedDate,
  setSelectedDate,
}) {
  const { width } = Dimensions.get("screen");

  //   const getDate = (count) => {
  //     const date = new Date(initialDate);
  //     const newDate = date.setDate(date.getDate() + count);
  //     return CalendarUtils.getCalendarDateString(newDate);
  //   };

  const onDayPress = useCallback((day) => {
    setSelectedDate(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      //   [getDate(-1)]: {
      //     marked: true,
      //   },
      [selectedDate]: {
        selected: true,
        disableTouchEvent: true,
      },
    };
  }, [selectedDate]);

  return (
    <View style={{ width: width - 32 }}>
      <Calendar
        enableSwipeMonths
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
        }}
        current={initialDate}
        onDayPress={onDayPress}
        markedDates={marked}
      />
    </View>
  );
}
