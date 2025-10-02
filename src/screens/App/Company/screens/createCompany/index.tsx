import { View } from "react-native";
import { Controller } from "react-hook-form";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Flag } from "@components/atoms/flag";
import { Button, Input } from "@components/atoms";
import { ImagePicker } from "src/components/molecules/ImagePicker/ImagePicker";

import { useCreateCompany } from "./hooks";
import { locales } from "./locales";
import { styles } from "./styles";

export const CreateCompanyScreen = () => {
 
  const {
    control,
    handleSubmit,
    errors,
    submitted,
    onSubmit,
    handleGoBack,
    isSubmitting,
    isValid,
    handlePickImage,
    imageUri,
    uploading,
    setUploading
  } = useCreateCompany();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Cadastrar Empresa",
        onArrowBackPress: handleGoBack,
      }}
    >
      <Flag label="Certifique que os dados da sua empresa estão corretos, pois pode causar problemas no futuro." />

      <View style={styles.formContainer}>
        {/* Componente ImagePicker reutilizável */}
        <ImagePicker
          label="Logo da Empresa"
          placeholder="Adicione a logo da empresa (opcional)"
          overlayText="Alterar Logo"
          overlaySubtext="Toque para escolher outra imagem"
          onImageSelect={handlePickImage}
          imageUri={imageUri}
          loading={uploading}
        />
        <Controller
          control={control}
          rules={{
            required: locales.form.cnpj.errorRequired,
            pattern: {
              value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
              message: locales.form.cnpj.errorPattern,
            },
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
              onChangeText={(text) => {
                const numericText = text.replace(/\D/g, "");
                let formattedText = numericText;
                if (numericText.length > 2) {
                  formattedText = `${numericText.slice(
                    0,
                    2
                  )}.${numericText.slice(2)}`;
                }
                if (numericText.length > 5) {
                  formattedText = `${formattedText.slice(
                    0,
                    6
                  )}.${formattedText.slice(6)}`;
                }
                if (numericText.length > 8) {
                  formattedText = `${formattedText.slice(
                    0,
                    10
                  )}/${formattedText.slice(10)}`;
                }
                if (numericText.length > 12) {
                  formattedText = `${formattedText.slice(
                    0,
                    15
                  )}-${formattedText.slice(15, 17)}`;
                }

                onChange(formattedText);
              }}
              value={value}
              maxLength={18}
            />
          )}
          name="cnpj"
        />

        <Controller
          control={control}
          rules={{
            required: locales.form.tradeName.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.tradeName.label}
              errorMensage={submitted ? errors.tradeName?.message : undefined}
              iconLeft="business-outline"
              placeholder={locales.form.tradeName.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="tradeName"
        />

        <Controller
          control={control}
          rules={{
            required: locales.form.corporateName.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.corporateName.label}
              errorMensage={
                submitted ? errors.corporateName?.message : undefined
              }
              iconLeft="briefcase-outline"
              placeholder={locales.form.corporateName.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="corporateName"
        />

        <Controller
          control={control}
          rules={{
            required: locales.form.regime.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.regime.label}
              errorMensage={submitted ? errors.regime?.message : undefined}
              iconLeft="options-outline"
              placeholder={locales.form.regime.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="regime"
        />

        <Controller
          control={control}
          rules={{
            required: locales.form.openingDate.errorRequired,
            pattern: {
              value: /^\d{2}\/\d{2}\/\d{4}$/,
              message: locales.form.openingDate.errorPattern,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.openingDate.label}
              errorMensage={submitted ? errors.openingDate?.message : undefined}
              iconLeft="calendar-outline"
              placeholder={locales.form.openingDate.placeholder}
              keyboardType="numeric"
              returnKeyType="next"
              onBlur={onBlur}
              onChangeText={(text) => {
                const numericText = text.replace(/\D/g, "");
                let formattedText = numericText;
                if (numericText.length > 2) {
                  formattedText = `${numericText.slice(
                    0,
                    2
                  )}/${numericText.slice(2)}`;
                }
                if (numericText.length > 4) {
                  formattedText = `${formattedText.slice(
                    0,
                    5
                  )}/${numericText.slice(4, 8)}`;
                }

                onChange(formattedText);
              }}
              value={value}
              maxLength={10}
            />
          )}
          name="openingDate"
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
              iconLeft="call-outline"
              placeholder={locales.form.phone.placeholder}
              keyboardType="phone-pad"
              returnKeyType="next"
              onBlur={onBlur}
              onChangeText={(text) => {
                const numericText = text.replace(/\D/g, "");
                let formattedText = numericText;
                if (numericText.length > 0) {
                  formattedText = `(${numericText.slice(0, 2)}`;
                }
                if (numericText.length > 2) {
                  formattedText = `${formattedText}) ${numericText.slice(
                    2,
                    7
                  )}`;
                }
                if (numericText.length > 7) {
                  formattedText = `${formattedText}-${numericText.slice(
                    7,
                    11
                  )}`;
                }

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

        <Button
          label={uploading ? "Enviando imagem..." : "Cadastrar Empresa"}
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting || uploading}
          isDisabled={!isValid || uploading}
          style={styles.submitButton}
        />
      </View>
    </ContentPageTemplate>
  );
};
