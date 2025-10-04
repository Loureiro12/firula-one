import { View, Image, TouchableOpacity, Text } from "react-native";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Flag } from "@components/atoms/flag";
import { Button, Input } from "@components/atoms";
import { MultiSelect } from "@components/atoms/MultiSelect";
import { SingleSelect } from "@components/atoms/SingleSelect";

import { useCreateNewCourt } from "./hooks";
import { locales } from "./locales";
import { styles } from "./styles";
import { theme } from "@styles/theme";

export const CreateNewCourtScreen = () => {
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
    sportsOptions,
    courtTypeOptions,
    handleSportsChange,
    handleCourtTypeChange,
    watchedSports,
    watchedCourtType,
    loadingCourtTypes,
  } = useCreateNewCourt();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Cadastrar Nova Quadra",
        onArrowBackPress: handleGoBack,
      }}
    >
      <Flag
        title={locales.flag.title}
        topics={locales.flag.topics}
      />

      <View style={styles.formContainer}>
        {/* Campo de nome da quadra */}
        <Controller
          control={control}
          rules={{
            required: locales.form.name.errorRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.name.label}
              errorMensage={submitted ? errors.name?.message : undefined}
              iconLeft="business-outline"
              placeholder={locales.form.name.placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />

        {/* Campo de valor por hora */}
        {/* <Controller
          control={control}
          rules={{
            required: locales.form.valueForHour.errorRequired,
            pattern: {
              value: /^\d+([,.]?\d{0,2})?$/,
              message: locales.form.valueForHour.errorPattern,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={locales.form.valueForHour.label}
              errorMensage={submitted ? errors.valueForHour?.message : undefined}
              iconLeft="cash-outline"
              placeholder={locales.form.valueForHour.placeholder}
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={(text) => {
                // Formatar valor monetário
                const numericText = text.replace(/[^\d,]/g, "");
                onChange(numericText);
              }}
              value={value}
            />
          )}
          name="valueForHour"
        /> */}

        {/* Campo opcional para imagem da quadra */}
        <View style={styles.imagePickerContainer}>
          <Text style={styles.imageLabel}>
            {locales.form.image.label}
          </Text>
          <TouchableOpacity
            onPress={handlePickImage}
            activeOpacity={0.8}
          >
            {imageUri ? (
              <View style={styles.selectedImageContainer}>
                <Image
                  source={{ uri: imageUri }}
                  style={styles.selectedImage}
                />
                <View style={styles.imageOverlay}>
                  <View style={styles.overlayContent}>
                    <Ionicons 
                      name="camera" 
                      size={24} 
                      color={theme.colors.white} 
                    />
                    <Text style={styles.overlayText}>
                      Alterar Foto
                    </Text>
                    <Text style={styles.overlaySubtext}>
                      Toque para escolher outra imagem
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.imagePlaceholder}>
                <View style={styles.imagePickerButton}>
                  <Ionicons 
                    name="camera-outline" 
                    size={32} 
                    color={theme.colors.neutral[400]}
                    style={{ marginBottom: 8 }}
                  />
                  <Text style={styles.imagePickerText}>
                    {locales.form.image.buttonText}
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Seleção múltipla de esportes */}
        <Controller
          control={control}
          rules={{
            validate: (value) => 
              value && value.length > 0 ? true : locales.form.sports.errorRequired,
          }}
          render={() => (
            <MultiSelect
              label={locales.form.sports.label}
              options={sportsOptions}
              selectedValues={watchedSports}
              onSelectionChange={handleSportsChange}
              errorMessage={
                submitted && (!watchedSports || watchedSports.length === 0)
                  ? locales.form.sports.errorRequired
                  : undefined
              }
            />
          )}
          name="sports"
        />

        {/* Seleção única do tipo de quadra */}
        <Controller
          control={control}
          rules={{
            required: locales.form.courtType.errorRequired,
          }}
          render={() => (
            <SingleSelect
              label={locales.form.courtType.label}
              options={courtTypeOptions}
              selectedValue={watchedCourtType}
              onSelectionChange={handleCourtTypeChange}
              placeholder={loadingCourtTypes ? "Carregando tipos de quadra..." : "Selecione o tipo de quadra"}
              errorMessage={
                submitted && !watchedCourtType
                  ? locales.form.courtType.errorRequired
                  : undefined
              }
            />
          )}
          name="courtType"
        />

        {/* Botão de submit */}
        <Button
          label={
            uploading 
              ? locales.buttons.uploadingImage
              : isSubmitting 
                ? locales.buttons.submitting
                : locales.buttons.submit
          }
          onPress={handleSubmit(onSubmit)}
          isLoading={isSubmitting || uploading}
          isDisabled={!isValid || uploading}
          style={styles.submitButton}
        />
      </View>
    </ContentPageTemplate>
  );
};
