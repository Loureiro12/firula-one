import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Button } from "@components/atoms";

import { useValidateReservations } from "./hook";
import { theme } from "@styles/theme";
import { styles } from "./styles";

export const ValidateReservations = () => {
  const { handleGoBack } = useValidateReservations();
  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Validar reservas",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.content}>
        <Ionicons name="qr-code" size={50} color={theme.colors.primary[100]} />
        <Text style={styles.title}>Escanear QR Code</Text>
        <Text style={styles.subtitle}>
          Escaneie o QR code do cliente para liberar o acesso
        </Text>
        <Button label="Abrir Scanner" iconName="camera" />
      </View>
    </ContentPageTemplate>
  );
};
