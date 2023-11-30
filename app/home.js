import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

const Logo = require('./../assets/logo.png');
const CheckIn = require('./../assets/check-in.png');

export default function Home() {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: '20%',
          borderBottomWidth: 2,
          borderBottomColor: '#B8E3A5',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: '40%',

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
      </View>
    </>
  );
}
