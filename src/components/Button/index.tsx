import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  testID?: string;
}

export default function Button({
  title,
  onPress,
  icon,
  testID
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
      testID={testID}
    >
      <Text style={styles.text}>{title}</Text>

      {icon}
    </Pressable>
  );
}