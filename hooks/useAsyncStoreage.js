//https://github.com/react-native-async-storage/async-storage/issues/32

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);
  const [updated, setUpdated] = useState(false);

  async function getStorageValue() {
    try {
      value = JSON.parse(await AsyncStorage.getItem(key)) || defaultValue;
    } catch (e) {
      console.log(e);
    } finally {
      updateStorageValue(value);
      setUpdated(true);
    }
  }

  async function updateStorage(newValue) {
    try {
      if (newValue === null) {
        await AsyncStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await AsyncStorage.setItem(key, value);
      }
    } catch (e) {
    } finally {
      setUpdated(false);
      getStorageValue();
    }
  }

  useEffect(() => {
    getStorageValue();
  }, [updated]);

  return [storageValue, updateStorage];
};

// // Custom hook for storing data
// export const useAsyncStorageStore = (key, value) => {
//   const storeData = async (key, value) => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem(key, jsonValue);
//       console.log(`Data saved successfully for key ${key}`);
//     } catch (error) {
//       console.error(`Error saving data for key ${key}: `, error);
//     }
//   };

//   return storeData;
// };

// // Custom hook for fetching data
// export const useAsyncStorageFetch = (key) => {
//   const [storedData, setStoredData] = useState(null);

//   const fetchData = async (key) => {
//     try {
//       const data = await AsyncStorage.getItem(key);
//       if (data !== null) {
//         const parsedData = JSON.parse(data);
//         setStoredData(parsedData);
//         console.log(`Data fetched successfully for key ${key}: `, parsedData);
//       } else {
//         console.log(`No data found for key ${key}.`);
//       }
//     } catch (error) {
//       console.error(`Error fetching data for key ${key}: `, error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { storedData, fetchData };
// };
