import { View, Text } from "react-native";
import { Controller } from "react-hook-form";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Button, Input } from "@components/atoms";
import { Flag } from "@components/atoms/flag";

import { useAddNewCompanyAddress } from "./hooks";
import { locales } from "./locales";
import { styles } from "./styles";

export const AddNewCompanyAddress = () => {
  const {
    control,
    errors,
    submitted,
    isValid,
    handleSubmit,
    onSubmit,
    handleGoBack,
    showAddressFields,
    isSearchingCep,
    handleSearchCep,
    handleCepChange,
    zipCodeValue,
  } = useAddNewCompanyAddress();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Adicionar novo endereço",
        onArrowBackPress: handleGoBack,
      }}
    >
      <Flag label="Digite o CEP para buscar o endereço automaticamente e complete as informações necessárias." />

      <View style={styles.formContainer}>
        {/* Seção do CEP */}
        <View style={styles.cepSection}>
          <Controller
            control={control}
            rules={{
              required: locales.form.zipCode.errorRequired,
              validate: (value) => {
                const cleanCep = value.replace(/[^0-9]/g, "");
                return cleanCep.length === 8 || locales.form.zipCode.errorPattern;
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.zipCode.label}
                errorMensage={submitted ? errors.zipCode?.message : undefined}
                iconLeft="location-outline"
                placeholder={locales.form.zipCode.placeholder}
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={(text) => {
                  handleCepChange(text);
                }}
                value={value}
                maxLength={9}
              />
            )}
            name="zipCode"
          />

          <Button
            label={isSearchingCep ? locales.buttons.searching : locales.buttons.searchAddress}
            onPress={handleSearchCep}
            isLoading={isSearchingCep}
            isDisabled={!zipCodeValue || zipCodeValue.replace(/[^0-9]/g, "").length !== 8}
            variante="secondary"
            iconName="search-outline"
          />
        </View>

        {/* Campos de endereço - aparecem após busca do CEP */}
        {showAddressFields && (
          <View style={styles.addressFieldsContainer}>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                {locales.messages.addressFound}
              </Text>
            </View>

            <Controller
              control={control}
              rules={{
                required: locales.form.street.errorRequired,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={locales.form.street.label}
                  errorMensage={submitted ? errors.street?.message : undefined}
                  iconLeft="home-outline"
                  placeholder={locales.form.street.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="street"
            />

            <View style={styles.rowContainer}>
              <View style={[styles.flexInput, { flex: 2 }]}>
                <Controller
                  control={control}
                  rules={{
                    required: locales.form.number.errorRequired,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label={locales.form.number.label}
                      errorMensage={submitted ? errors.number?.message : undefined}
                      iconLeft="keypad-outline"
                      placeholder={locales.form.number.placeholder}
                      keyboardType="numeric"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="number"
                />
              </View>

              <View style={[styles.flexInput, { flex: 3 }]}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label={locales.form.complement.label}
                      errorMensage={submitted ? errors.complement?.message : undefined}
                      iconLeft="add-outline"
                      placeholder={locales.form.complement.placeholder}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="complement"
                />
              </View>
            </View>

            <Controller
              control={control}
              rules={{
                required: locales.form.neighborhood.errorRequired,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={locales.form.neighborhood.label}
                  errorMensage={submitted ? errors.neighborhood?.message : undefined}
                  iconLeft="business-outline"
                  placeholder={locales.form.neighborhood.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="neighborhood"
            />

            <Controller
              control={control}
              rules={{
                required: locales.form.city.errorRequired,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={locales.form.city.label}
                  errorMensage={submitted ? errors.city?.message : undefined}
                  iconLeft="location-outline"
                  placeholder={locales.form.city.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="city"
            />

            <Controller
              control={control}
              rules={{
                required: locales.form.state.errorRequired,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={locales.form.state.label}
                  errorMensage={submitted ? errors.state?.message : undefined}
                  iconLeft="map-outline"
                  placeholder={locales.form.state.placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="state"
            />

            <Button
              label={locales.buttons.save}
              onPress={handleSubmit(onSubmit)}
              style={styles.submitButton}
              isDisabled={!isValid}
              iconName="save-outline"
            />
          </View>
        )}
      </View>
    </ContentPageTemplate>
  );
};
