import { Text } from 'react-native';

export default function H1({ children }) {
  return (
    <Text className="font-comfortaa text-4xl text-center my-4 text-green-900">
      {children}
    </Text>
  );
}
