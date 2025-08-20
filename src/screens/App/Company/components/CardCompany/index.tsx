import { useState } from "react";

import { Text, View } from "react-native";

import Switch from "react-native-switch-toggles";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { ICreateCompany } from "./types";

export const CardCompany = ({ cnpj, name, status }: ICreateCompany) => {
  const [isEnabled, setIsEnabled] = useState(status === "ACTIVE");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.companyName}>{name}</Text>
          <View style={styles.contentLocation}>
            <Ionicons
              name="business-outline"
              size={18}
              color={theme.colors.gray.gray03}
            />
            <Text style={styles.textLocation}>{cnpj}</Text>
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
        {status === "ACTIVE" ? (
          <Text>Empresa ativa</Text>
        ) : (
          <Text>Empresa inativa</Text>
        )}

        <Switch
          value={isEnabled}
          onChange={(value) => setIsEnabled(value)}
          activeTrackColor={theme.colors.primary[100]}
        />
      </View>
    </View>
  );
};
