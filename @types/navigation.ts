import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

// types/navigation.ts
export type RootStackParamList = {
  Login: undefined;
  KakaoLogin: undefined;
  Home: undefined;
};

export type Navigation = NativeStackNavigationProp<RootStackParamList>;
