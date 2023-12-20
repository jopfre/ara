import { Shadow } from 'react-native-shadow-2';
import { useRef } from 'react';
import { Text, View, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { ImageBackground } from 'react-native';

export default function Button({
  title = null,
  onPress = null,
  href = null,
  padding = 18,
  disabled = false,
  height,
  style,
  children,
  ...rest
}) {
  const Content = (
    <Pressable
      onPress={() => {
        onPress && onPress();
      }}
      style={[{ width: '100%', marginTop: 16 }, style]}
      {...rest}
      disabled={disabled}
    >
      {({ pressed }) => (
        <Shadow
          distance={2}
          startColor={pressed || disabled ? '#ffffff' : '#3D6F4E'}
          offset={[0, 4]}
          stretch={true}
        >
          <View
            className={`border-4 items-center  ${
              disabled
                ? 'bg-gray-300 border-gray-400'
                : 'bg-green-50 border-green-200'
            }`}
            style={{
              borderRadius: 40,
              height: height,
              padding: padding,
            }}
          >
            {children}
          </View>
        </Shadow>
      )}
    </Pressable>
  );
  if (href) {
    return (
      <Link href={href} asChild style={{ width: '100%', marginTop: 16 }}>
        {Content}
      </Link>
    );
  } else {
    return <>{Content}</>;
  }
}

// {image && (
//   <View className="w-full flex-1">
//     <Image source={image} className="flex-1" contentFit="contain" />
//   </View>
// )}
// {title && (
//   <Text
//     className={`font-comfortaa text-2xl text-green-950 ${
//       image && 'mt-6'
//     }`}
//   >
//     {title}
//   </Text>
// )}
