import H1 from "../components/h1";
import H2 from "../components/h2";
import P from "../components/p";
import BackButton from "../components/back-button";
import * as Linking from "expo-linking";
import Button from "../components/button";
import ButtonText from "../components/button-text";
import ButtonImage from "../components/button-image";
import { View } from "react-native";
import Modal from "../components/modal";
import AddContactForm from "../components/add-contact-form";

import { useState, useEffect } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { getCurrentDate } from "../utils/date";
import AddSupportWorkerForm from "../components/add-support-worker";
import Header from "../components/header";
export default function Contacts() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSupportWorker, setIsSupportWorker] = useState(false);

  const [contacts, setContacts] = useState(null);
  const [supportWorker, setSupportWorker] = useState(null);

  const { getItem: getSupportWorker } = useAsyncStorage("support-worker");
  const { getItem: getContacts } = useAsyncStorage("contacts");

  const readItemFromStorage = async () => {
    // removeItem();
    const storedSupportWorker = await getSupportWorker();
    if (storedSupportWorker) setSupportWorker(JSON.parse(storedSupportWorker));
    const storedContacts = await getContacts();
    if (storedContacts) setContacts(JSON.parse(storedContacts));
  };

  useEffect(() => {
    readItemFromStorage();
  }, [modalVisible]);

  return (
    <>
      <Header>Contacts</Header>

      <H2>Ara contacts</H2>
      <Button
        onPress={() => {
          Linking.openURL("tel:03301340286");
        }}
      >
        <ButtonText>Ara Main Office</ButtonText>
        <ButtonText>0330 1340 286</ButtonText>
      </Button>
      <Button
        onPress={() => {
          if (!supportWorker) {
            setIsSupportWorker(true);
            setModalVisible(true);
          } else {
            Linking.openURL(`tel:${Object.values(supportWorker)[0]}`);
          }
        }}
        onLongPress={() => {
          setIsSupportWorker(true);
          setModalVisible(true);
        }}
        height={!supportWorker ? 150 : 90}
      >
        <ButtonText>
          {supportWorker ? Object.keys(supportWorker)[0] : "My support worker"}
        </ButtonText>
        {supportWorker && (
          <ButtonText>{Object.values(supportWorker)[0]}</ButtonText>
        )}

        {!supportWorker && (
          <ButtonImage
            source={require("../assets/add.png")}
            className="mt-4 w-8"
          />
        )}
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:07971484286");
        }}
      >
        <ButtonText>Emergency out of hours (weekday)</ButtonText>
        <ButtonText>07971 484286</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:03005550334");
        }}
      >
        <ButtonText>Emergency out of hours (weekend)</ButtonText>
        <ButtonText>0300 5550334</ButtonText>
      </Button>

      <H2 style={{ marginTop: 64 }}>Helpline contacts</H2>
      <Button
        onPress={() => {
          Linking.openURL("tel:03005550334");
        }}
      >
        <ButtonText>Mental Health Crisis Team (24/7)</ButtonText>
        <ButtonText>0300 5550334</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:08088080330");
        }}
      >
        <ButtonText>Bristol Mindline (8pm - midnight)</ButtonText>
        <ButtonText>0808 8080330</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:116123");
        }}
      >
        <ButtonText>Samaritans</ButtonText>
        <ButtonText>116 123</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:08009177650");
        }}
      >
        <ButtonText>Alcoholics Anonymous (24/7)</ButtonText>
        <ButtonText>0800 9177650</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:03009991212");
        }}
      >
        <ButtonText>Narcotics Anonymous (10am - midnight)</ButtonText>
        <ButtonText>0300 9991212</ButtonText>
      </Button>
      <Button
        onPress={() => {
          Linking.openURL("tel:07760632986");
        }}
      >
        <ButtonText>Cocaine Anonymous (10am - 10pm)</ButtonText>
        <ButtonText>07760 632986</ButtonText>
      </Button>
      <H2 style={{ marginTop: 64 }}>My contacts</H2>
      {contacts &&
        Object.keys(contacts)?.map((contact) => (
          <Button
            key={contact}
            onPress={() => {
              Linking.openURL(`tel:${contacts[contact]}`);
            }}
          >
            <ButtonText>{contact}</ButtonText>
            <ButtonText>{contacts[contact]}</ButtonText>
          </Button>
        ))}
      <Button
        onPress={() => {
          setIsSupportWorker(false);
          setModalVisible(true);
        }}
        height={150}
      >
        <ButtonText>Add contact</ButtonText>
        <ButtonImage
          source={require("../assets/add.png")}
          className="mt-4 w-8"
        />
      </Button>

      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        {isSupportWorker ? (
          <AddSupportWorkerForm setModalVisible={setModalVisible} />
        ) : (
          <AddContactForm setModalVisible={setModalVisible} />
        )}
      </Modal>
    </>
  );
}
