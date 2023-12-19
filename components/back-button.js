import { useRouter } from 'expo-router';
import Button from './button';
import ButtonImage from './button-image';

export default function BackButton({ href, title }) {
  const router = useRouter();

  return (
    <Button
      height={30}
      style={{ width: 50, transform: 'translateY(-10px)', marginRight: 'auto' }}
      onPress={() => {
        router.back();
      }}
      padding={4}
    >
      <ButtonImage source={require('./../assets/back.png')} />
    </Button>
  );
}
