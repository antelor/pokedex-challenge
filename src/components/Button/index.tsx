import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
}

export default function Button({
  title,
  onPress,
  icon,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{title}</Text>

      {icon}
    </Pressable>
  );
}