import { Link } from 'expo-router';
import { Text, Pressable } from 'react-native';

export default function LinkButton({ href, title }) {
  return (
    <Link
      href={href}
      asChild
      style={({ pressed }) => [
        {
          shadowOffset: pressed
            ? { width: 0, height: 0 }
            : { width: 0, height: 8 },
        },
        {
          backgroundColor: '#DEFFDE',
          borderColor: '#B8E3A5',
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
    >
      <Pressable>
        <Text style={{ fontSize: 24, color: '#0E6135' }}>{title}</Text>
      </Pressable>
    </Link>
  );
}
