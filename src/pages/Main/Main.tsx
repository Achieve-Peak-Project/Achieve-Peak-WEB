import { Text, View } from "react-native";
import { getUserInfo } from "../../utils/userInfo";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../../../@types/navigation";
import { getToken } from "../../utils/token";

export default () => {
  const userInfo = async () => await getUserInfo();
  console.log("userInfo", userInfo);
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (!token) {
        navigation.navigate("Login");
      }
    };

    checkToken();
  }, []);

  return (
    <View>
      <Text>MAIN</Text>
    </View>
  );
};
