import { ActivityIndicator, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { IButtonProps } from "./types";
import { styles } from "./styles";
import { theme } from "@styles/theme";

export const Button = ({
  label,
  iconName,
  isDisabled,
  isLoading,
  testIDPrefix,
  ...rest
}: IButtonProps) => {
  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor:
            isDisabled || isLoading
              ? theme.colors.primary["200"]
              : theme.colors.primary["100"],
        },
      ]}
      disabled={isDisabled}
      testID={`${testIDPrefix}-button`}
    >
      <Ionicons name={iconName} size={24} color="white" />
      {isLoading ? (
        <ActivityIndicator size="small" color="white" animating={isLoading} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </Pressable>
  );
};
