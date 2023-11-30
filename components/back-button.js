import { useRouter } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

const Back = require('./../assets/back.png');

export default function BackButton({ href, title }) {
  const router = useRouter();

  return (
    <Pressable
      // style={({ pressed }) => [
      //   {
      //     shadowOffset: pressed
      //       ? { width: 0, height: 0 }
      //       : { width: 0, height: 8 },
      //   },
      //   {
      //     backgroundColor: '#ADE59F',
      //     borderColor: '#B8E3A5',
      //     borderWidth: 4,
      //     padding: 20,
      //     borderRadius: 40,
      //     alignItems: 'center',
      //     shadowColor: '#3D704E',
      //     shadowOpacity: 1,
      //     shadowRadius: 0,
      //     marginVertical: 16,
      //   },
      // ]}

      onPress={() => {
        router.back();
      }}
    >
      <Image
        source={Back}
        style={{
          width: 60,
          height: 50,
        }}
        contentFit="contain"
      />
    </Pressable>
  );
}
