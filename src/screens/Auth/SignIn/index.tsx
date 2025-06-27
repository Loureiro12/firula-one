import { Text, TouchableOpacity, View } from "react-native";
import { Controller } from "react-hook-form";

import { Button, Input } from "@components/atoms";
import { InteractiveTemplate } from "@components/templates/InteractiveTemplate";

import { styles } from "./styles";
import { useSignIn } from "./hooks";
import { locales } from "./locales";

export default function SignInScreen() {
  const {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    onSubmit,
    setSubmitted,
    submitted,
    handleNavigateToSignUp,
  } = useSignIn();

  return (
    <InteractiveTemplate>
      <View style={styles.container}>
        <Text style={styles.title}>{locales.header.title}</Text>
        <Text style={styles.subtitle}>{locales.header.subtitle}</Text>
        <View style={styles.contentInputs}>
          <Controller
            control={control}
            rules={{
              required: locales.form.email.errorRequired,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: locales.form.email.errorPattern,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.email.label}
                errorMensage={submitted ? errors.email?.message : undefined}
                iconLeft="mail-outline"
                placeholder={locales.form.email.placeholder}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="done"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.password.errorRequired,
              minLength: {
                value: 2,
                message: locales.form.password.errorMinLength,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.password.label}
                errorMensage={submitted ? errors.password?.message : undefined}
                iconLeft="lock-closed-outline"
                placeholder={locales.form.password.placeholder}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
        </View>
        <Button
          label="Entrar"
          onPress={() => {
            setSubmitted(true);
            handleSubmit(onSubmit)();
          }}
          isDisabled={(!isValid && submitted) || isSubmitting}
          isLoading={isSubmitting}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Não tem conta?</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToSignUp}>
          <Text style={styles.textSubscribe}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </InteractiveTemplate>
  );
}
