import { View } from "react-native";

import { IconNavButton } from "@components/atoms";

import { styles } from "./styles";
import { IActionButtonsContainerProps } from "./types";

export const ActionButtonsContainer = ({
  onCreateReservationPress,
  onManageReservationsPress,
  onValidateReservationsPress,
}: IActionButtonsContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.cotainerButton}>
        <IconNavButton
          label="Validar reservas"
          iconName="qr-code"
          onPress={onValidateReservationsPress}
        />
        <IconNavButton
          label="Nova Reserva"
          iconName="calendar"
          onPress={onCreateReservationPress}
        />
        <IconNavButton
          label="Relatórios"
          iconName="stats-chart-outline"
          onPress={onManageReservationsPress}
        />
      </View>
    </View>
  );
};
