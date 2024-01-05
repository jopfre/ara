import {
  Calendar,
  CalendarList,
  Agenda,
  CalendarProvider,
} from 'react-native-calendars';
import Header from '../components/header';
import AgendaScreen from '../components/agendaScreen';
import { Dimensions, Text, View } from 'react-native';
export default function AraCalendar() {
  const { height } = Dimensions.get('screen');
  return (
    <>
      <Header>Calendar</Header>
      {/* <Calendar /> */}
      {/* <AgendaScreen /> */}
      <View style={{ height: height - 170 }} className="w-full">
        <Agenda
          renderEmptyDate={() => {
            return (
              <View>
                <Text>This is empty date!</Text>
              </View>
            );
          }}
          renderEmptyData={() => {
            return (
              <View>
                <Text>empty data</Text>
              </View>
            );
          }}
        />
      </View>
    </>
  );
}
