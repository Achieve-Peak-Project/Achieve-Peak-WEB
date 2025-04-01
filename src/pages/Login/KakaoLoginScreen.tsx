import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { getKakaoAuthUrl, getTokenFromCode } from "../../utils/kakao";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";
import { Navigation } from "../../../@types/navigation";
import { getToken, storeToken } from "../../utils/token";
import { storeUserInfo } from "../../utils/userInfo";

export default function KakaoLoginScreen() {
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

  const handleWebViewNavigation = async (event: any) => {
    const url = event.url;

    if (url.startsWith(process.env.KAKAO_REDIRECT_URI)) {
      const codeMatch = url.match(/code=([^&]+)/);
      if (codeMatch) {
        const code = codeMatch[1];
        const tokenData = await getTokenFromCode(code);
        console.log("✅ 카카오 토큰:", tokenData);

        // TODO: 여기에 로그인 처리 로직 추가
        const accessToken = tokenData.access_token;
        try {
          const response = await axios.post(`${API_URL}/auth/login`, {
            accessToken,
          });

          if (response) {
            storeToken(accessToken);
            storeUserInfo(response.data);
            navigation.navigate("Home");
          } else {
            alert("로그인 실패");
            navigation.navigate("Login");
          }
        } catch (error) {
          alert("로그인 실패");
          navigation.navigate("Login");
        }
      }
    }
  };

  return (
    <WebView
      source={{ uri: getKakaoAuthUrl() }}
      onNavigationStateChange={handleWebViewNavigation}
    />
  );
}
