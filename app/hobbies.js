import H1 from '../components/h1';
import P from '../components/p';
import Button from '../components/button';
import ButtonText from '../components/button-text';
import ButtonImage from '../components/button-image';
import BackButton from '../components/back-button';
import { View } from 'react-native';

export default function Hobbies() {
  return (
    <>
      <BackButton />

      <H1>What are you doing for fun?</H1>
      <P>
        You deserve to have fun. Seek to rediscover yourself by trying something
        new. Tap the activities below to find out more…
      </P>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button height={220} style={{ flex: 1 }}>
          <ButtonImage
            source={require('./../assets/walking.png')}
            background={true}
          />
          <ButtonText className="mt-4">Walking</ButtonText>
        </Button>
        <Button height={220} style={{ flex: 1 }}>
          <ButtonImage
            source={require('./../assets/reading.png')}
            background={true}
          />
          <ButtonText className="mt-4">Reading</ButtonText>
        </Button>
      </View>
    </>
  );
}
