import H1 from '../components/h1';
import P from '../components/p';
import BackButton from '../components/back-button';
import * as Linking from 'expo-linking';
import HobbyButtons from '../components/hobby-buttons';

export default function Hobbies() {
  return (
    <>
      <BackButton />

      <H1>What are you doing for fun?</H1>
      <P>
        You deserve to have fun. Seek to rediscover yourself by trying something
        new. Tap the activities below to find out more…
      </P>
      <HobbyButtons />
      <P className="mt-8 mb-12">
        For support with starting activities, contact our Community Engagement
        worker Zak on{' '}
        <P
          onPress={() => {
            Linking.openURL('tel:+447552369548');
          }}
        >
          07552 369548
        </P>
      </P>
    </>
  );
}
