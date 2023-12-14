import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/button';
import { Link } from 'expo-router';
import ActivityChart from '../components/activity-chart';
import ButtonText from '../components/button-text';
const Logo = require('./../assets/logo.png');
const CheckIn = require('./../assets/check-in.png');

export default function Home() {
  return (
    <View className="w-full">
      <View className="h-[120px] -mx-4 flex-1 border-b-4 mb-4 border-green-200 items-center">
        <Link
          href="/"
          asChild
          style={{
            width: 120,
            flex: 1,
          }}
        >
          <Pressable>
            <Image
              source={Logo}
              style={{
                flex: 1,
              }}
              contentFit="contain"
            />
          </Pressable>
        </Link>
      </View>
      <ActivityChart />
      <Button href="/contacts">
        <ButtonText>Contacts</ButtonText>
      </Button>
      <Button href="/checkin">
        <ButtonText>Daily Check-in</ButtonText>
      </Button>
      <Button href="/hobbies">
        <ButtonText>Hobbies</ButtonText>
      </Button>
    </View>
  );
}
