import { Text } from 'react-native';

export default function ButtonText({ children, ...rest }) {
  return (
    <Text className="font-comfortaa text-2xl text-green-950" {...rest}>
      {children}
    </Text>
  );
}