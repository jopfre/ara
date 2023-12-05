import { Text, Pressable, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { Shadow } from 'react-native-shadow-2';
export default function Button({
  title = null,
  onPress = null,
  active = false,
  href = null,
  image = null,
  height = 'auto',
  style,
  ...rest
}) {
  const buttonStyle = ({ pressed }) => [
    {
      // shadowOffset: pressed ? { width: 0, height: 0 } : { width: 2, height: 8 },
    },
    {
      // shadowOffset: { width: 2, height: 8 },
      backgroundColor: '#F0FFF1',
      // borderColor: active ? '#58A360' : '#B8E3A5',
      borderColor: '#ADE59F',
      borderWidth: 4,
      padding: 20,
      borderRadius: 40,
      width: '100%',
      alignItems: 'center',
      // shadowColor: '#3D6F4E',
      // shadowOpacity: 1,
      // shadowRadius: 0,
      marginVertical: 16,
      // flex: 1,
      // elevation: 8,
      height: height,
      ...style,
    },
  ];
  // className={`my-4 items-center w-full p-5 rounded-3xl bg-green-100 active:shadow-none shadow border-4 ${
  //   active ? 'border-green-500' : 'border-green-300'
  // }`}
  const Content = (
    <>
      {title && (
        <Text className="font-comfortaa text-2xl text-green-950">{title}</Text>
      )}
      {image && (
        <View className="w-full  flex-1">
          <Image source={image} className="flex-1" contentFit="contain" />
        </View>
      )}
    </>
  );
  if (href) {
    return (
      <Link href={href} asChild style={buttonStyle}>
        <Pressable>{Content}</Pressable>
      </Link>
    );
  } else {
    return (
      <Pressable
        style={buttonStyle}
        onPress={() => {
          onPress && onPress();
        }}
        // {...rest}
      >
        {Content}
      </Pressable>
    );
  }
}
