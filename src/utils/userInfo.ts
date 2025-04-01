import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUserInfo = async (userInfo: any) => {
  try {
    await AsyncStorage.setItem("userInfo", userInfo);
  } catch (e) {
    console.error("토큰 저장 실패", e);
  }
};

export const getUserInfo = async () => {
  const userInfo = await AsyncStorage.getItem("userInfo");
  return userInfo;
};
