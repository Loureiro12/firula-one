import { Text, View } from "react-native";

import { styles } from "./styles";
import { ICardProps } from "./types";
import { theme } from "@styles/theme";

export const Card = ({ type, description, title }: ICardProps) => {
  const FlagContainerBackgroundStyles = () => {
    switch (type) {
      case "Pending":
        return theme.colors.yellow[100];
      case "Confirmed":
        return theme.colors.green[50];
      case "Cancelled":
        return theme.colors.error[100];
      case "Completed":
        return theme.colors.info;
      default:
        return theme.colors.neutral[900];
    }
  };

  const FlagTextColorStyles = () => {
    switch (type) {
      case "Pending":
        return theme.colors.white;
      case "Confirmed":
        return theme.colors.green[100];
      case "Cancelled":
        return theme.colors.white;
      case "Completed":
        return theme.colors.white;
      default:
        return theme.colors.neutral[900];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <View
        style={[
          styles.containerFlag,
          {
            backgroundColor: FlagContainerBackgroundStyles(),
          },
        ]}
      >
        <Text
          style={[
            styles.textFlag,
            {
              color: FlagTextColorStyles(),
            },
          ]}
        >
          {type === "Pending" ? "Pendente" : "Confirmado"}
        </Text>
      </View>
    </View>
  );
};
