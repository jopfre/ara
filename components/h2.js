import { Text } from 'react-native';

export default function H2({ children, ...rest }) {
  return (
    <Text
      className="font-comfortaa text-3xl text-center my-4 text-green-900"
      {...rest}
    >
      {children}
    </Text>
  );
}
