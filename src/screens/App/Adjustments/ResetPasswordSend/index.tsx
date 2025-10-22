import React from "react";
import { View, Text } from "react-native";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { useResetPasswordSend } from "./hooks";
import { styles } from "./styles";
import { Button } from "@components/atoms";

export const ResetPasswordSendScreen = () => {
  const { maskedTo, loading, handleSendToken, handleGoBack } =
    useResetPasswordSend();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{ title: "Redefinir senha", onArrowBackPress: handleGoBack }}
    >
      <View style={styles.container}>
        <Text
          style={styles.title}
        >Redefinir senha</Text>

        <Text
          style={styles.subTitle}
        >
          Enviaremos um código de verificação por SMS para o número cadastrado
          em sua conta. Use esse código na próxima etapa para criar uma nova
          senha.
        </Text>
        <Text style={styles.infoText}>
          Enviaremos um código para o número: {maskedTo}
        </Text>

        <View>
          <Button
            label="Enviar código"
            onPress={handleSendToken}
            isLoading={loading}
          />
        </View>
      </View>
    </ContentPageTemplate>
  );
};

export default ResetPasswordSendScreen;
