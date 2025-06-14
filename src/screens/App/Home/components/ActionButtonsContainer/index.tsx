import { View } from "react-native";

import { IconNavButton } from "@components/atoms";

import { styles } from "./styles";

export const ActionButtonsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.cotainerButton}>
        <IconNavButton label="Validar reservas" iconName="qr-code" />
        <IconNavButton label="Nova Reserva" iconName="calendar" />
        <IconNavButton label="Relatórios" iconName="stats-chart-outline" />
      </View>
    </View>
  );
};
