import { Text, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { MaskedText } from "@components/atoms/MaskedText";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { ICreateCompany } from "./types";

export const CardCompany = ({
  cnpj,
  name,
  mobilePhone,
  companyAddress,
  ...rest
}: ICreateCompany) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={styles.companyName}>{name}</Text>
          <View style={styles.contentLocation}>
            <Ionicons
              name="business-outline"
              size={18}
              color={theme.colors.gray.gray03}
            />
            <MaskedText type="cnpj" value={cnpj} style={styles.textLocation} />
          </View>
          {companyAddress?.street && (
            <View style={styles.contentLocation}>
              <Ionicons
                name="location-outline"
                size={16}
                color={theme.colors.gray.gray04}
              />
              <Text style={styles.textSmall}>
                {companyAddress.street}, {companyAddress.number},{" "}
                {companyAddress.neighborhood}
              </Text>
            </View>
          )}

          {mobilePhone && (
            <View style={styles.contentLocation}>
              <Ionicons
                name="call-outline"
                size={16}
                color={theme.colors.gray.gray04}
              />
              <MaskedText
                type="phone"
                value={mobilePhone}
                style={styles.textSmall}
              />
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonSeeDetails}
        activeOpacity={0.7}
        {...rest}
      >
        <Text style={styles.textButton}>Ver detalhes da empresa</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
