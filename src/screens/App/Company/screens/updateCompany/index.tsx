import { View, Alert, Switch, Text } from "react-native";
import { Controller } from "react-hook-form";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Flag } from "@components/atoms/flag";
import { Button, Input } from "@components/atoms";
import { ImagePicker } from "src/components/molecules/ImagePicker/ImagePicker";

import { useUpdateCompany } from "./hooks";
import { locales } from "../createCompany/locales";
import { styles } from "../createCompany/styles";
import { theme } from "@styles/theme";

export const UpdateCompanyScreen = () => {
  const {
    control,
    handleSubmit,
    errors,
    submitted,
    onSubmit,
    handleGoBack,
    isValid,
    isSubmitting,
    handlePickImage,
    imageUri,
    uploading,
    loading,
    watchedIsActive,
    handleActiveChange,
  } = useUpdateCompany();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Editar Empresa",
        onArrowBackPress: handleGoBack,
      }}
    >
      <Flag label="Atualize os dados da sua empresa quando necessário." />

      <View style={styles.formContainer}>
        <ImagePicker
          label="Logo da Empresa"
          placeholder="Adicione a logo da empresa (opcional)"
          overlayText="Alterar Logo"
          overlaySubtext="Toque para escolher outra imagem"
          onImageSelect={handlePickImage}
          imageUri={imageUri}
          loading={uploading}
        />

        {/* Reuse same inputs as create screen */}
        <Controller
          control={control}
          rules={{
            required: locales.form.cnpj.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.cnpj.label}
              errorMensage={submitted ? errors.cnpj?.message : undefined}
              iconLeft="document-text-outline"
              placeholder={locales.form.cnpj.placeholder}
              keyboardType="numeric"
              returnKeyType="next"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              isDisabled
            />
          )}
          name="cnpj"
        />

        <Controller
          control={control}
          render={({ field: { value } }) => (
            <Input
              label={locales.form.tradeName.label}
              iconLeft="business-outline"
              placeholder={locales.form.tradeName.placeholder}
              value={value}
              isDisabled
            />
          )}
          name="tradeName"
        />

        <Controller
          control={control}
          render={({ field: { value } }) => (
            <Input
              label={locales.form.corporateName.label}
              iconLeft="briefcase-outline"
              placeholder={locales.form.corporateName.placeholder}
              value={value}
              isDisabled
            />
          )}
          name="corporateName"
        />

        <Controller
          control={control}
          render={({ field: { value } }) => (
            <Input
              label={locales.form.regime.label}
              iconLeft="options-outline"
              placeholder={locales.form.regime.placeholder}
              value={value}
              isDisabled
            />
          )}
          name="regime"
        />

        <Controller
          control={control}
          render={({ field: { value } }) => (
            <Input
              label={locales.form.openingDate.label}
              iconLeft="calendar-outline"
              placeholder={locales.form.openingDate.placeholder}
              value={value}
              isDisabled
            />
          )}
          name="openingDate"
        />

        {/* Editable phone */}
        <Controller
          control={control}
          rules={{
            required: locales.form.phone.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.phone.label}
              errorMensage={submitted ? errors.phone?.message : undefined}
              iconLeft="call-outline"
              placeholder={locales.form.phone.placeholder}
              keyboardType="phone-pad"
              returnKeyType="next"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phone"
        />

        {/* Editable description */}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.description.label}
              errorMensage={submitted ? errors.description?.message : undefined}
              iconLeft="document-text-outline"
              placeholder={locales.form.description.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
              numberOfLines={4}
            />
          )}
          name="description"
        />

        {/* Switch para ativar/desativar empresa (mesmo padrão do UpdateBlockScreen) */}
        <View style={styles.switchContainer}>
          <View style={styles.switchHeader}>
            <Text style={styles.switchLabel}>Ativar Empresa</Text>
            <Controller
              control={control}
              render={({ field: { value } }) => (
                <Switch
                  value={value}
                  onValueChange={handleActiveChange}
                  trackColor={{
                    false: theme.colors.neutral[200],
                    true: theme.colors.primary[100],
                  }}
                  thumbColor={value ? "#FFFFFF" : "#A3A3A3"}
                />
              )}
              name="isActive"
            />
          </View>

          <Text style={styles.switchDescription}>
            {watchedIsActive ? "Empresa ativa" : "Empresa inativa"}
          </Text>

          <View style={styles.statusIndicator}>
            <View
              style={[
                styles.statusDot,
                watchedIsActive
                  ? styles.statusDotActive
                  : styles.statusDotInactive,
              ]}
            />
            <Text
              style={
                watchedIsActive
                  ? styles.statusTextActive
                  : styles.statusTextInactive
              }
            >
              {watchedIsActive ? "Ativa" : "Inativa"}
            </Text>
          </View>
        </View>

        {/* Other fields omitted for brevity: reuse implementation from CreateCompany }*/}

        <Button
          label={isSubmitting ? "Salvando..." : "Salvar"}
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting || uploading}
          isDisabled={!isValid || uploading}
          style={styles.submitButton}
        />
      </View>
    </ContentPageTemplate>
  );
};

export default UpdateCompanyScreen;
