import React from "react";
import { View, Text } from "react-native";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { useResetPasswordSendPublic } from "./hooks";
import { styles } from "./styles";
import { Controller } from "react-hook-form";
import { Button } from "@components/atoms/button";
import { Input } from "@components/atoms";

export const ResetPasswordSendPublic = () => {
  const { control, handleSend, loading } = useResetPasswordSendPublic();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{ title: "Recuperar senha" }}
    >
      <View style={styles.container}>
        <Text style={styles.hint}>Vamos te ajudar a recuperar o acesso</Text>

        <Text style={styles.subTitle}>
          Informe o CPF associado à sua conta. Enviaremos um código via SMS para confirmar que é você.
        </Text>

        <Controller
          control={control}
          name="cpf"
          render={({ field }) => (
            <Input
              placeholder="CPF"
              value={field.value}
              onChangeText={field.onChange}
              style={{ borderWidth: 1, padding: 8, marginBottom: 12 }}
            />
          )}
        />

        <View style={styles.buttonContainer}>
          <Button
            label="Enviar código"
            onPress={handleSend as any}
            isLoading={loading}
          />
        </View>
      </View>
    </ContentPageTemplate>
  );
};

export default ResetPasswordSendPublic;
