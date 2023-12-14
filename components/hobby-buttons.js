import Modal from '../components/modal';
import { Pressable, View } from 'react-native';
import { useState } from 'react';
import Button from '../components/button';
import ButtonText from '../components/button-text';
import ButtonImage from '../components/button-image';
export default function HobbyButtons() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  return (
    <>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        text={modalText}
      />
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Walking is simple, free and one of the easiest ways to get more active, lose weight and become healthier. You do not have to walk for hours. A brisk 10-minute daily walk has lots of health benefits and counts towards your 150 minutes of weekly exercise, as recommended by the NHS Ara run walking sessions with the Human Nature Project on Fridays, 10am – 12pm. For more info,drop Zak a message or give him a call on 07552 369548',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/walking.png')}
            background={true}
          />
          <ButtonText className="mt-4">Walking</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'For most, the act of reading is a solitary act but this doesn’t have to be the case. Reading can be turned into a social event by finding a like-minded group of friends or members of your community and joining a book group. Reading before bed helps with sleep, especially if your transform your reading into a night-time ritual. Reading also reduces stress and anxiety, as with any meditative activity that forces you to focus on a single task. If you want to try out reading for pleasure, tell your support worker and they can help you access the right books for you.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/reading.png')}
            background={true}
          />
          <ButtonText className="mt-4">Reading</ButtonText>
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Meditation is not mystical – it’s simply a way for us to stop for a moment and be calm. In a busy world, it gives us the permission to pause, breathe and reset. There are many types of meditation but the thing they all have in common is that, over time, they can help lower stress levels.For more info, look at the NHS website on starting meditation here.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/meditation.png')}
            background={true}
          />
          <ButtonText className="mt-4">Meditation</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Swimming uses all the muscles in the body. So whether you swim a gentle breaststroke or hammer butterfly, you will get a full body workout. Water supports up to 90 per cent of the body’s weight, so if you have a long term injury or illness, swimming is a brilliant way to stay active. At Ara, we can facilitate swim and gym memberships. For more info, drop Zak a message or give him a call on 07552 369548.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/swimming.png')}
            background={true}
          />
          <ButtonText className="mt-4">Swimming</ButtonText>
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'By learning a couple of simple recipes and cooking for yourself, you can ensure that you eat fresh, wholesome meals. This can help you to look and feel healthier, boost your energy, stabilize your weight and mood, and improve your sleep and resilience to stress. Ara run cooking sessions on Mondays from 11am – 2pm. For more info, drop Zak a message or give him a call on 07552 369548',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/cooking.png')}
            background={true}
          />
          <ButtonText className="mt-4">Cooking</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Gardening can improve your health, by exposing you to environments and activities that help your mind and body function better. Studies around the world have directly linked the impacts of gardening to reductions in depression and anxiety. A study in Japan showed that simply looking at plants reduces stress, anger and sadness.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/gardening.png')}
            background={true}
          />
          <ButtonText className="mt-4">Gardening</ButtonText>
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. You don’t have to mean run marathons! It’s about finding the right activity for you. At Ara, we can facilitate personal training and gym memberships, lighter options like yoga and Pilates, and everything in between. For more info, drop Zak a message or give him a call on 07552 369548.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/exercise.png')}
            background={true}
          />
          <ButtonText className="mt-4">Exercise</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Drawing and being creatively expressive is a great emotional outlet. It is free, and can help release stress and anxiety. You can draw at home to boost your imagination and creativity, be more mindful and grounded, and relieve anxious thoughts. Art helps many people to improve their mental health. For more info, read the case study here or contact your support worker for tips and ways to get creative.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/drawing.png')}
            background={true}
          />
          <ButtonText className="mt-4">Drawing</ButtonText>
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'A gentle kick about can reducing body fat and build strength, stamina and speed. It also trains your brain, improving concentration and coordination. Finally it can promote teamwork, help you to be social and boost your confidence Ara run football sessions at St Paul’s Leisure Centre every Friday, between 2.30pm and 3.30pm. For more info, drop Zak a message or give him a call on 07552 369548',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/football.png')}
            background={true}
          />
          <ButtonText className="mt-4">Football</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Creative writing helps you to express your feelings. Some people also use creative writing as a way of connecting with others, by sharing tales and perspectives while also learning from, and supporting one another. Writing about difficult situations can help us release our feelings in a healthy way. Keeping a journal offers a safe space for you to express your deepest emotions and thoughts without judgement. Putting your thoughts onto paper may allow you to process feelings, gain clarity, and better understand your own emotional landscape.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/writing.png')}
            background={true}
          />
          <ButtonText className="mt-4">Writing</ButtonText>
        </Button>
      </View>
      <View className="flex-row flex-1" style={{ gap: 16 }}>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Listening to music releases dopamine, the feel-good chemical in your brain. Music can improve memory and cognitive function, while various studies have suggested that singing could potentially lower stress and make you feel happier. Playing musical instruments can improve lots of things, such as your memory, hand-eye coordination, and your ability to track different voices. It also changes the way your brain sees your body, as you learn to use parts of your body in a new way. Ara has a partnership project with the Bristol Folk House to help people explore music and creativity. For more info, drop Zak a message or give him a call on 07552 369548.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/music.png')}
            background={true}
          />
          <ButtonText className="mt-4">Music</ButtonText>
        </Button>
        <Button
          height={220}
          style={{ flex: 1 }}
          onPress={() => {
            setModalText(
              'Ever fancied learning something totally new? Or maybe you’ve always had a passion, and would like to do it more? Learning helps you to build your strength and confidence. Ara can link you in with a range of providers whether it’s music, art and creativity, academic subjects or languages – tell us what you want to learn, and we’ll help. For more info, drop Zak a message or give him a call on 07552 369548.',
            );
            setModalVisible(true);
          }}
        >
          <ButtonImage
            source={require('./../assets/studying.png')}
            background={true}
          />
          <ButtonText className="mt-4">Studying</ButtonText>
        </Button>
      </View>
    </>
  );
}
