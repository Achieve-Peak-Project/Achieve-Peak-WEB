import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MarginTop from "../../components/MarginTop";
import { API_URL } from "@env";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../../../@types/navigation";
import { useEffect } from "react";
import { getToken } from "../../utils/token";

export default () => {
  const navigation = useNavigation<Navigation>();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        navigation.navigate("Home");
      }
    };

    checkToken();
  }, []);

  const isLogin = () => {
    console.log("API_URL", API_URL);
    navigation.navigate("KakaoLogin");
  };

  return (
    <View style={styles.container}>
      <MarginTop marginTop={175} />

      <View style={styles.image_wrapper}>
        <Image
          style={styles.image}
          source={require("../../../assets/Images/Logo.png")}
        />
      </View>

      <MarginTop marginTop={90} />

      <View style={styles.button_wrapper}>
        <Text>간편하게 로그인하고</Text>
        <Text>다양한 서비스를 이용해보세요.</Text>

        <MarginTop marginTop={30} />

        <TouchableOpacity style={styles.button} onPress={isLogin}>
          <Image
            style={styles.button_img}
            source={require("../../../assets/Images/kakao_login_large_wide.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image_wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    resizeMode: "contain",
  },

  button_wrapper: {
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  button_img: {
    width: "80%",
    height: 50,
    resizeMode: "contain",
  },
});
