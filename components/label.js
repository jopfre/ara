import { Text } from 'react-native';

export default function P({ children, ...rest }) {
  return (
    <Text className="font-comfortaa text-lg  text-green-950" {...rest}>
      {children}
    </Text>
  );
}
