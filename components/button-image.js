import { View } from 'react-native';
import { Image } from 'expo-image';
import { ImageBackground } from 'react-native';

export default function ButtonImage({ source, background = false, ...rest }) {
  const Content = (
    <Image
      source={source}
      className={`flex-1 ${background && 'scale-125'}`}
      contentFit="contain"
    />
  );
  if (background) {
    return (
      <ImageBackground
        source={require('./../assets/circle.png')}
        className="w-full flex-1"
        {...rest}
      >
        {Content}
      </ImageBackground>
    );
  } else {
    return (
      <View className="w-full flex-1" {...rest}>
        {Content}
      </View>
    );
  }
}
