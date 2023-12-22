import { Text } from 'react-native';

export default function ButtonText({ children, ...rest }) {
  return (
    <Text
      className="font-comfortaa text-[16px] text-green-950 text-center"
      {...rest}
    >
      {children}
    </Text>
  );
}
