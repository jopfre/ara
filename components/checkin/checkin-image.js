const Circle = require('../../assets/circle.png');
import { Image } from 'expo-image';
import { ImageBackground } from 'react-native';
export default function CheckinImage({ source }) {
  return (
    <ImageBackground source={Circle} className="my-8 h-[250px] w-[250px]">
      <Image
        source={source}
        className="flex-1 scale-125"
        contentFit="contain"
      />
    </ImageBackground>
  );
}
