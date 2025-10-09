import React from "react";
import { View, Image, TouchableOpacity, Text, Switch, ActivityIndicator } from "react-native";
import { Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Button, Input } from "@components/atoms";
import { MultiSelect } from "@components/atoms/MultiSelect";
import { SingleSelect } from "@components/atoms/SingleSelect";
import { Skeleton } from "@components/molecules";

import { useUpdateBlock } from "./hooks";
import { locales } from "./locales";
import { styles } from "./styles";
import { theme } from "@styles/theme";

export const UpdateBlockScreen = () => {
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
    handleActiveChange,
    watchedSports,
    watchedCourtType,
    watchedIsActive,
    loadingCourtTypes,
    loadingBlock,
    hasChanges,
  } = useUpdateBlock();

  // Renderizar skeleton loading enquanto carrega dados
  if (loadingBlock) {
    return (
      <ContentPageTemplate
        isScrollable
        headerProps={{
          title: "Editar Quadra",
          onArrowBackPress: handleGoBack,
        }}
      >
        <View style={styles.formContainer}>
          <Skeleton height={60} radius={8} isFullWidth />
          <Skeleton height={200} radius={8} isFullWidth />
          <Skeleton height={80} radius={8} isFullWidth />
          <Skeleton height={80} radius={8} isFullWidth />
          <Skeleton height={100} radius={8} isFullWidth />
          <Skeleton height={50} radius={8} isFullWidth />
        </View>
      </ContentPageTemplate>
    );
  }

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Editar Quadra",
        onArrowBackPress: handleGoBack,
      }}
    >
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

        {/* Switch para ativar/desativar quadra */}
        <View style={styles.switchContainer}>
          <View style={styles.switchHeader}>
            <Text style={styles.switchLabel}>
              {locales.form.isActive.label}
            </Text>
            <Controller
              control={control}
              render={({ field: { value } }) => (
                <Switch
                  value={value}
                  onValueChange={handleActiveChange}
                  trackColor={{ 
                    false: theme.colors.neutral[200], 
                    true: theme.colors.primary[100] 
                  }}
                  thumbColor={value ? theme.colors.white : theme.colors.neutral[400]}
                />
              )}
              name="isActive"
            />
          </View>
          
          <Text style={styles.switchDescription}>
            {locales.form.isActive.description}
          </Text>

          {/* Indicador visual do status */}
          <View style={styles.statusIndicator}>
            <View 
              style={[
                styles.statusDot, 
                watchedIsActive ? styles.statusDotActive : styles.statusDotInactive
              ]} 
            />
            <Text 
              style={[
                styles.statusText,
                watchedIsActive ? styles.statusTextActive : styles.statusTextInactive
              ]}
            >
              {watchedIsActive ? locales.form.isActive.activeLabel : locales.form.isActive.inactiveLabel}
            </Text>
          </View>
        </View>

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
