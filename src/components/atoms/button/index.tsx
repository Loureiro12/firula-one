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
  variante = "primary",
  ...rest
}: IButtonProps) => {
  const getContainerStyle = () => {
    if (variante === "primary") {
      return [
        styles.container,
        styles.primaryContainer,
        {
          backgroundColor: isDisabled || isLoading 
            ? theme.colors.primary["200"] 
            : theme.colors.primary["100"],
        },
      ];
    } else {
      return [
        styles.container,
        styles.secondaryContainer,
        (isDisabled || isLoading) && {
          borderColor: theme.colors.primary["200"],
          backgroundColor: theme.colors.neutral[50],
        },
      ];
    }
  };

  const getLabelStyle = () => {
    if (variante === "primary") {
      return styles.primaryLabel;
    } else {
      return [
        styles.secondaryLabel,
        (isDisabled || isLoading) && { color: theme.colors.primary["200"] }
      ];
    }
  };

  const getIconColor = () => {
    if (variante === "primary") {
      return "white";
    } else {
      return isDisabled || isLoading 
        ? theme.colors.primary["200"] 
        : theme.colors.primary["100"];
    }
  };

  const getActivityIndicatorColor = () => {
    if (variante === "primary") {
      return "white";
    } else {
      return theme.colors.primary["100"];
    }
  };

  return (
    <Pressable
      {...rest}
      style={getContainerStyle()}
      disabled={isDisabled}
      testID={`${testIDPrefix}-button`}
    >
      <Ionicons name={iconName} size={24} color={getIconColor()} />
      {isLoading ? (
        <ActivityIndicator 
          size="small" 
          color={getActivityIndicatorColor()} 
          animating={isLoading} 
        />
      ) : (
        <Text style={getLabelStyle()}>{label}</Text>
      )}
    </Pressable>
  );
};
