import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IAccountPendingAlertProps } from "./types";

export const AccountPendingAlert = ({ ...rest }: IAccountPendingAlertProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Ionicons
        name="alert-circle-outline"
        size={24}
        color={theme.colors.white}
      />
      <Text style={styles.text}>Seu cadastro precisa de atenção</Text>
    </TouchableOpacity>
  );
};
