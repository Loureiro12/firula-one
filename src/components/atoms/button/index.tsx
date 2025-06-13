import { Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { IButtonProps } from "./types";
import { styles } from "./styles";

export const Button = ({
  label,
  iconName,
  testIDPrefix,
  ...rest
}: IButtonProps) => {
  return (
    <Pressable
      {...rest}
      style={styles.container}
      testID={`${testIDPrefix}-button`}
    >
      <Ionicons name={iconName} size={24} color="white" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
