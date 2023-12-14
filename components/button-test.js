import { Shadow } from 'react-native-shadow-2';
import { useRef } from 'react';
import { Text, View, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';
const Checkin = require('./../assets/checkin.png');
import { Image } from 'expo-image';
export default function Button({
  title = null,
  onPress = null,
  active = false,
  href = null,
  image = null,
  height,
  style,
  ...rest
}) {
  const translateYValue = new Animated.Value(0);

  const onPressIn = () => {
    Animated.timing(translateYValue, {
      toValue: 2,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(translateYValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const Content = (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      // onPressIn={onPressIn}
      // onPressOut={onPressOut}
      style={{ width: '100%', marginVertical: 16 }}
    >
      {({ pressed }) => (
        <Shadow
          distance={4}
          startColor={pressed ? '#ffffff' : '#3D6F4E'}
          offset={[0, 6]}
          stretch={true}
        >
          <Animated.View
            style={[
              {
                borderRadius: 40,
                backgroundColor: '#F0FFF1',
                height: height,
                alignItems: 'center',
                borderColor: '#ADE59F',
                borderWidth: 4,
                padding: 20,
              },
              {
                transform: [{ translateY: translateYValue }],
              },
            ]}
          >
            <View className="w-full flex-1">
              <Image source={image} className="flex-1" contentFit="contain" />
            </View>
            <Text className="font-comfortaa text-2xl text-green-950">
              {title}
            </Text>
          </Animated.View>
        </Shadow>
      )}
    </Pressable>
  );
  if (href) {
    return (
      <Link href={href} asChild style={{ width: '100%', marginVertical: 16 }}>
        {Content}
      </Link>
    );
  } else {
    return { Content };
  }
}
