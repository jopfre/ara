import { Text, Pressable } from 'react-native';

export default function Button({ title, onPress, active = false }) {
  return (
    <Pressable
      // className={`my-4 items-center w-full p-5 rounded-3xl bg-green-100 active:shadow-none shadow border-4 ${
      //   active ? 'border-green-500' : 'border-green-300'
      // }`}
      style={({ pressed }) => [
        {
          shadowOffset: pressed
            ? { width: 0, height: 0 }
            : { width: 0, height: 8 },
        },
        {
          backgroundColor: '#DEFFDE',
          borderColor: active ? '#58A360' : '#B8E3A5',
          borderWidth: 4,
          padding: 20,
          borderRadius: 40,
          width: '100%',
          alignItems: 'center',
          shadowColor: '#79A588',
          shadowOpacity: 1,
          shadowRadius: 0,
          marginVertical: 16,
        },
      ]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={{ fontSize: 30, color: '#0E6135' }}>{title}</Text>
    </Pressable>
  );
}
