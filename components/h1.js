import { Text } from 'react-native';

export default function H1({ children }) {
  return (
    <Text className="text-4xl text-center my-8 text-green-900">{children}</Text>
  );
}
