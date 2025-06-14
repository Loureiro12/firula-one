import { Pressable, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IconNavButtonProps } from "./types";

export const IconNavButton = ({
  label,
  iconName,
  ...rest
}: IconNavButtonProps) => {
  return (
    <Pressable {...rest} style={styles.container}>
      <Ionicons name={iconName} size={20} color={theme.colors.primary[100]} />
      <View style={styles.contentLabel}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};
