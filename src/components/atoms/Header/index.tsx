import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { IHeaderProps } from "./types";
import { theme } from "@styles/theme";

export const Header = ({
  onArrowBackPress,
  rightIcon,
  rightIconOnPress,
  title,
}: IHeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1, alignItems: "flex-start" }}
        onPress={onArrowBackPress}
      >
        {onArrowBackPress && (
          <Ionicons name="chevron-back" size={24} color={theme.colors.primary[100]} />
        )}
      </TouchableOpacity>
      <View style={{ flex: 3, alignItems: "center" }}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ flex: 1, alignItems: "flex-end" }}
        onPress={rightIconOnPress}
      >
        {rightIcon && <Ionicons name={rightIcon} size={24} color="black" />}
      </TouchableOpacity>
    </View>
  );
};
