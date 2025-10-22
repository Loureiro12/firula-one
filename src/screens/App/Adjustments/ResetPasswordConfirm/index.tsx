import React from "react";
import { View, Text } from "react-native";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { useResetPasswordConfirm } from "./hooks";
import { styles } from "./styles";
import { Controller } from "react-hook-form";
import { Button } from "@components/atoms/button";
import { Input } from "@components/atoms";

export const ResetPasswordConfirmScreen = () => {
  const { control, onSubmit, loading, handleGoBack } =
    useResetPasswordConfirm();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Confirmar nova senha",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        <Text style={styles.hint}>Insira o código e a nova senha</Text>

        <Text style={styles.subTitle}>
          Informe o código recebido e defina uma nova senha segura.
        </Text>
        <View style={styles.form}>
          <Controller
            control={control}
            name="code"
            render={({ field }) => (
              <Input
                placeholder="Código"
                value={field.value}
                onChangeText={field.onChange}
                style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
              />
            )}
          />

          <Controller
            control={control}
            name="newPassword"
            render={({ field }) => (
              <Input
                placeholder="Nova senha"
                value={field.value}
                onChangeText={field.onChange}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                style={{ borderWidth: 1, padding: 8, marginBottom: 8 }}
              />
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <Input
                placeholder="Confirme a senha"
                value={field.value}
                onChangeText={field.onChange}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                style={{ borderWidth: 1, padding: 8, marginBottom: 16 }}
              />
            )}
          />

          <View>
            <Button
              label="Confirmar"
              onPress={onSubmit}
              isLoading={loading}
            />
          </View>
        </View>
      </View>
    </ContentPageTemplate>
  );
};

export default ResetPasswordConfirmScreen;
