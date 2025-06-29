import { Text, TouchableOpacity, View } from "react-native";
import { Controller } from "react-hook-form";

import { isValidCPF } from "src/utils/function";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Button, Input } from "@components/atoms";

import { useEditProfile } from "./hooks";
import { styles } from "./styles";
import { locales } from "./locales";
import { DataAlert } from "./components/DataAlert";

export const EditProfileScreen = () => {
  const {
    handleGoBack,
    control,
    errors,
    handleSubmit,
    isValid,
    submitted,
    isSubmitting,
    hasChanges,
    handleDeleteAccount
  } = useEditProfile();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Editar Perfil",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        <DataAlert />
        
        <View style={styles.contentInputs}>
          <Controller
            control={control}
            rules={{
              required: locales.form.name.errorRequired,
              minLength: {
                value: 2,
                message: locales.form.name.errorMinLength,
              },
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s']+$/,
                message: locales.form.name.errorPattern,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.name.label}
                errorMensage={submitted ? errors.name?.message : undefined}
                iconLeft="person-outline"
                placeholder={locales.form.name.placeholder}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isFlex
              />
            )}
            name="name"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.lastName.errorRequired,
              minLength: {
                value: 2,
                message: locales.form.lastName.errorMinLength,
              },
              pattern: {
                value: /^[a-zA-ZÀ-ÿ\s']+$/,
                message: locales.form.lastName.errorPattern,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.lastName.label}
                errorMensage={submitted ? errors.lastName?.message : undefined}
                iconLeft="person-outline"
                placeholder={locales.form.lastName.placeholder}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isFlex
              />
            )}
            name="lastName"
          />

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
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isDisabled
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.phone.errorRequired,
              pattern: {
                value: /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/,
                message: locales.form.phone.errorPattern,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.phone.label}
                errorMensage={submitted ? errors.phone?.message : undefined}
                iconLeft="phone-portrait-outline"
                placeholder={locales.form.phone.placeholder}
                keyboardType="phone-pad"
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={(text) => {
                  const formattedText = text
                    .replace(/\D/g, "")
                    .replace(/^(\d{2})(\d)/g, "($1) $2")
                    .replace(/(\d)(\d{4})$/, "$1-$2");
                  onChange(formattedText);
                }}
                value={value}
                maxLength={15}
              />
            )}
            name="phone"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.document.errorRequired,
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                message: locales.form.document.errorPattern,
              },
              validate: {
                validCpf: (value) =>
                  isValidCPF(value) || locales.form.document.errorInvalid,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.document.label}
                errorMensage={submitted ? errors.document?.message : undefined}
                iconLeft="id-card-outline"
                placeholder={locales.form.document.placeholder}
                keyboardType="number-pad"
                returnKeyType="next"
                onBlur={onBlur}
                onChangeText={(text) => {
                  const formattedText = text
                    .replace(/\D/g, "")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d)/, "$1.$2")
                    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                  onChange(formattedText);
                }}
                value={value}
                maxLength={14}
                isDisabled
              />
            )}
            name="document"
          />
        </View>
        <Button
          label={locales.form.buttons.save}
          onPress={() => {
            handleSubmit();
          }}
          isDisabled={(!isValid && submitted) || isSubmitting || !hasChanges}
          isLoading={isSubmitting}
        />

        <TouchableOpacity activeOpacity={0.7} onPress={handleDeleteAccount}>
          <Text style={styles.textDeleteAccount}>
            {locales.form.buttons.deleteAccount}
          </Text>
        </TouchableOpacity>
      </View>
    </ContentPageTemplate>
  );
};
