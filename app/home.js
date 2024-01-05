import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/button';
import { Link } from 'expo-router';
import ButtonText from '../components/button-text';
import Charts from '../components/charts';
import CheckInButton from '../components/checkin-button';
import { getCurrentDate } from '../utils/date';
const Logo = require('./../assets/logo.png');

export default function Home() {
  const now = new Date();
  const day = now.getDay();

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
      <Charts />
      <Button href="/calendar">
        <View className="flex-row items-center">
          <ButtonText
            className={`px-[14px] pt-1 pb-2  ${
              day === 1 && 'bg-green-700 rounded-3xl'
            }`}
          >
            M
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2  ${
              day === 2 && 'bg-green-700 rounded-3xl'
            }`}
          >
            T
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2  ${
              day === 3 && 'bg-green-700 rounded-3xl'
            }`}
          >
            W
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2  ${
              day === 4 && 'bg-green-700 rounded-3xl'
            }`}
          >
            T
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2   ${
              day === 5 && 'bg-green-700 rounded-3xl'
            }`}
          >
            F
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2   ${
              day === 6 && 'bg-green-700 rounded-3xl'
            }`}
          >
            S
          </ButtonText>
          <ButtonText
            className={`px-[14px] pt-1 pb-2   ${
              day === 7 && 'bg-green-700 rounded-3xl'
            }`}
          >
            S
          </ButtonText>
        </View>
      </Button>
      <Button href="/contacts">
        <ButtonText>Contacts</ButtonText>
      </Button>
      <CheckInButton />
      <Button href="/hobbies">
        <ButtonText>Hobbies</ButtonText>
      </Button>
    </View>
  );
}
