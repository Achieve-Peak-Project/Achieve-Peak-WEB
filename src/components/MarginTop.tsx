import { View } from "react-native";

type Props = {
  marginTop: number;
};

export default ({ marginTop }: Props) => {
  return <View style={{ marginTop: marginTop }} />;
};
