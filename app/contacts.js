import H1 from '../components/h1';
import H2 from '../components/h2';
import P from '../components/p';
import BackButton from '../components/back-button';
import * as Linking from 'expo-linking';
import Button from '../components/button';
import ButtonText from '../components/button-text';
import ButtonImage from '../components/button-image';
import { View } from 'react-native';
import Modal from '../components/modal';
import { useState } from 'react';
import AddContactForm from '../components/add-contact-form';
export default function Contacts() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSupportWorker, setIsSupportWorker] = useState(false);
  return (
    <>
      <View className="flex-1 flex-row relative w-full justify-center">
        <View className="absolute left-0">
          <BackButton />
        </View>

        <H1 className="-translate-y-2">Contacts</H1>
      </View>
      <H2>Ara contacts</H2>
      <Button
        onPress={() => {
          Linking.openURL('tel:03301340286');
        }}
      >
        <ButtonText>Ara Main Office</ButtonText>
        <ButtonText>0330 1340 286</ButtonText>
      </Button>
      <Button
        onPress={() => {
          setIsSupportWorker(true);
          setModalVisible(true);
        }}
        height={150}
      >
        <ButtonText className="text-center">My support worker</ButtonText>
        <ButtonImage
          source={require('../assets/add.png')}
          className="mt-4 w-8"
        />
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:07971484286');
        }}
      >
        <ButtonText className="text-center">
          Emergency out of hours (weekday)
        </ButtonText>
        <ButtonText>07971 484286</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:03005550334');
        }}
      >
        <ButtonText className="text-center">
          Emergency out of hours (weekend)
        </ButtonText>
        <ButtonText>0300 5550334</ButtonText>
      </Button>

      <H2 style={{ marginTop: 64 }}>Helpline contacts</H2>
      <Button
        onPress={() => {
          Linking.openURL('tel:03005550334');
        }}
      >
        <ButtonText className="text-center">
          Mental Health Crisis Team (24/7)
        </ButtonText>
        <ButtonText>0300 5550334</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:08088080330');
        }}
      >
        <ButtonText className="text-center">
          Bristol Mindline (8pm - midnight)
        </ButtonText>
        <ButtonText>0808 8080330</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:116123');
        }}
      >
        <ButtonText className="text-center">Samaritans</ButtonText>
        <ButtonText>116 123</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:08009177650');
        }}
      >
        <ButtonText>Alcoholics Anonymous (24/7)</ButtonText>
        <ButtonText>0800 9177650</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:03009991212');
        }}
      >
        <ButtonText className="text-center">
          Narcotics Anonymous (10am - midnight)
        </ButtonText>
        <ButtonText>0300 9991212</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL('tel:07760632986');
        }}
      >
        <ButtonText className="text-center">
          Cocaine Anonymous (10am - 10pm)
        </ButtonText>
        <ButtonText>07760 632986</ButtonText>
      </Button>
      <H2 style={{ marginTop: 64 }}>My contacts</H2>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        height={150}
      >
        <ButtonText className="text-center">Add contact</ButtonText>
        <ButtonImage
          source={require('../assets/add.png')}
          className="mt-4 w-8"
        />
      </Button>
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <AddContactForm
          setModalVisible={setModalVisible}
          isSupportWorker={isSupportWorker}
        />
      </Modal>
    </>
  );
}
