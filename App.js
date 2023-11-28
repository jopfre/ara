import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

const Logo = require('./assets/logo.png');
const CheckIn = require('./assets/check-in.png');

export default function App() {
  return (
    <View
      style={{
        alignItems: 'center',
        paddingTop: 58,
        flex: 1,
      }}
    >
      <View
        style={{
          // flex: 1,
          height: '20%',
        }}
      >
        <Image source={Logo} style={{ flex: 1 }} contentFit="contain" />
        <Text style={{ color: '#0E6135', flex: 1, fontSize: 48 }}>
          Welcome back!
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          // flex: 1,
          height: '50%',
        }}
      >
        <Image
          source={CheckIn}
          style={{
            flex: 1,
          }}
          contentFit="contain"
        />
      </View>
      <Pressable onPress={() => alert('You pressed a button.')}>
        <Text style={{}}>Home</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   // image: ,
// });
