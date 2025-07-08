import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { theme } from "@styles/theme";
import { IFlag } from "./types";

export const Flag = ({ label }: IFlag) => {
  return (
    <View style={styles.container}>
      <Ionicons name="flag" size={20} color={theme.colors.white} />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};
