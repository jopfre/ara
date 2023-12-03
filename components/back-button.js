import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import Button from './button';

const Back = require('./../assets/chevron-left.svg');

export default function BackButton({ href, title }) {
  const router = useRouter();

  return (
    <Button
      image={Back}
      height={32}
      style={{ width: 70, padding: 0 }}
      onPress={() => {
        router.back();
      }}
    />
  );
}
