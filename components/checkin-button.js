import { getCurrentDate } from "../utils/date";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import Button from "./button";
import ButtonText from "./button-text";
import ButtonImage from "./button-image";

export default function CheckInButton({ image = false }) {
  const date = getCurrentDate();
  const { getItem } = useAsyncStorage("checkin");
  const [checkedIn, setCheckedIn] = useState(false);
  const readItemFromStorage = async () => {
    const item = await getItem();

    setCheckedIn(
      Object.keys(JSON.parse(item)).find((key) => key === date) ? true : false
    );
  };
  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <Button
      href="/checkin/mood"
      height={image ? 300 : 69}
      disabled={!checkedIn}
    >
      <ButtonText>Daily Check-in {checkedIn && "Complete"}</ButtonText>
      {image && (
        <ButtonImage source={require("./../assets/checkin-leaf.png")} />
      )}
    </Button>
  );
}
