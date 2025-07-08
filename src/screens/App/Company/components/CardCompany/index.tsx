import { useState } from "react";

import { Text, View } from "react-native";

import Switch from "react-native-switch-toggles";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";

export const CardCompany = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.companyName}>Fael Futvolei</Text>
          <View style={styles.contentLocation}>
            <Ionicons
              name="location-outline"
              size={18}
              color={theme.colors.gray.gray03}
            />
            <Text style={styles.textLocation}>São Paulo, SP</Text>
          </View>
        </View>
        <View>
          <Ionicons
            name="create-outline"
            size={24}
            color={theme.colors.gray.gray03}
          />
        </View>
      </View>

      <View style={styles.containerCompanyStatus}>
        <Text>Quadra ativa</Text>
        <Switch
          // size={20}
          value={isEnabled}
          onChange={(value) => setIsEnabled(value)}
          activeTrackColor={theme.colors.primary[100]}
        />
      </View>
    </View>
  );
};
