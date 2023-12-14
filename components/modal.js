import { View, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import Button from './button';
import ButtonImage from './button-image';
import P from './p';
export default function AraModal({ modalVisible, setModalVisible, text }) {
  return (
    <Modal
      // animationType="slide"
      transparent={true}
      isVisible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      backdropColor="#072914"
      backdropOpacity={0.9}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      useNativeDriverForBackdrop={true}
      useNativeDriver={true}
    >
      <View
        className="bg-white px-4 py-6 m-4 border-4 border-green-200"
        style={{ borderRadius: 40 }}
      >
        <Button
          height={54}
          style={{
            width: 54,
            marginLeft: 'auto',
            position: 'absolute',
            top: -50,
            right: -30,
          }}
          padding={12}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <ButtonImage source={require('./../assets/close.png')} />
        </Button>
        <P className="text-xs">{text}</P>
      </View>
    </Modal>
  );
}
