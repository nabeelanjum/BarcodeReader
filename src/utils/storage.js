import AsyncStorage from '@react-native-community/async-storage';

export const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert('Unable to store value in storage: ', key);
    console.log(e);
  }
}

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    alert('Unable to get value from storage: ', key);
    console.log(e);
  }
}