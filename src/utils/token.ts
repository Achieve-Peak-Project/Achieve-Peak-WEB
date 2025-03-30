import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("accessToken", token);
  } catch (e) {
    console.error("토큰 저장 실패", e);
  }
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem("accessToken");
  return token;
};
