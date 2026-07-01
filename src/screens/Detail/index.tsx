import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function Detail({ route }: Props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Pokemon #{route.params.id}</Text>
    </SafeAreaView>
  );
}