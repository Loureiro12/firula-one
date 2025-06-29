import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { theme } from "@styles/theme";

export const DataAlert = () => {
  return (
    <View style={styles.container}>
     <View style={styles.content}>
       <Ionicons name="information-circle-outline" size={24} color={theme.colors.neutral[700]} />
      <Text style={styles.label}>
        Mantenha seus dados atualizados para garantir contato rápido.
      </Text>
     </View>
    </View>
  );
};
