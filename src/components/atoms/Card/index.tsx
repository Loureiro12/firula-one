import { Text, View } from "react-native";

import { styles } from "./styles";
import { ICardProps } from "./types";
import { theme } from "@styles/theme";

export const Card = ({ type, description, title }: ICardProps) => {
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
            backgroundColor:
              type === "Pending"
                ? theme.colors.yellow[50]
                : theme.colors.green[50],
          },
        ]}
      >
        <Text
          style={[
            styles.textFlag,
            {
              color:
                type === "Pending"
                  ? theme.colors.yellow[100]
                  : theme.colors.green[100],
            },
          ]}
        >
          {type === "Pending" ? "Pendente" : "Confirmado"}
        </Text>
      </View>
    </View>
  );
};
