import { KAKAO_API_KEY, KAKAO_REDIRECT_URI } from "@env";

export const getKakaoAuthUrl = () => {
  return (
    `https://kauth.kakao.com/oauth/authorize` +
    `?response_type=code` +
    `&client_id=${KAKAO_API_KEY}` +
    `&redirect_uri=${KAKAO_REDIRECT_URI}`
  );
};

export const getTokenFromCode = async (code: string) => {
  const response = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=authorization_code&client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`,
  });

  const data = await response.json();
  return data; // access_token, refresh_token 등
};
