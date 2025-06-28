import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IPendingTaskCardProps } from "./types";

export const PendingTaskCard = ({
  description,
  title,
  ...rest
}: IPendingTaskCardProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <View>
        <Ionicons
          name="alert-circle-outline"
          size={24}
          color={theme.colors.error}
        />
      </View>

      <View style={styles.textContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View>
        <Ionicons
          name="arrow-forward"
          size={24}
          color={theme.colors.neutral[800]}
        />
      </View>
    </TouchableOpacity>
  );
};
