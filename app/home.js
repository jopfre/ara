import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/button';
import { Link } from 'expo-router';
import ActivityChart from '../components/activity-chart';
const Logo = require('./../assets/logo.png');
const CheckIn = require('./../assets/check-in.png');

export default function Home() {
  return (
    <View className="px-4">
      <View className="h-[150px] flex-1 border-b-2 border-green-300 items-center">
        <Link
          href="/"
          asChild
          style={{
            width: '40%',
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
      <Button href="/contacts" title="Contacts" />
      <Button href="/checkin" title="Daily Check-in" />
      <Button href="/hobbies" title="Hobbies" />
    </View>
  );
}
