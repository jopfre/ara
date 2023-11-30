import { Text, View } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/button';

const Logo = require('./../assets/logo.png');
const CheckIn = require('./../assets/check-in.png');

export default function App() {
  return (
    <>
      <View
        style={{
          width: '60%',
          flex: 1,
        }}
      >
        <Image
          source={Logo}
          style={{
            flex: 1,
          }}
          contentFit="contain"
        />
      </View>

      <Text style={{ color: '#0E6135', flex: 1, fontSize: 48 }}>
        Welcome back!
      </Text>

      <Button href="/checkin" title="Daily Check-in" />
      {/* <View
        style={{
          width: '100%',
          flex: 2,
        }}
      >
        <Image
          source={CheckIn}
          style={{
            flex: 1,
          }}
          contentFit="contain"
        />
      </View> */}
      <Button href="/home" title="Home" />
    </>
  );
}
