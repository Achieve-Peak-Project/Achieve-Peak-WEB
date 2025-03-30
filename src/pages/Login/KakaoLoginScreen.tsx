import React from "react";
import { WebView } from "react-native-webview";
import { getKakaoAuthUrl, getTokenFromCode } from "../../utils/kakao";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { API_URL } from "@env";
import { Navigation } from "../../../@types/navigation";

export default function KakaoLoginScreen() {
  const navigation = useNavigation<Navigation>();

  const handleWebViewNavigation = async (event: any) => {
    const url = event.url;

    if (url.startsWith(process.env.KAKAO_REDIRECT_URI)) {
      const codeMatch = url.match(/code=([^&]+)/);
      if (codeMatch) {
        const code = codeMatch[1];
        const tokenData = await getTokenFromCode(code);
        console.log("✅ 카카오 토큰:", tokenData);

        // TODO: 여기에 로그인 처리 로직 추가
        // const accessToken = tokenData.access_token;
        // const response = await axios.post(`${API_URL}/auth/login`, {
        //   accessToken,
        // });

        // if (response) {
        navigation.navigate("Home");
        // }
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
