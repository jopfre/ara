import { Text } from 'react-native';

export default function P({ children, ...rest }) {
  return (
    <Text
      className="font-comfortaa text-md text-center text-green-950"
      {...rest}
    >
      {children}
    </Text>
  );
}
