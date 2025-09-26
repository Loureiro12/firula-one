import { InteractiveTemplate } from "@components/templates/InteractiveTemplate";
import { Text, TouchableOpacity, View } from "react-native";
import { useSignUp } from "./hooks";
import { styles } from "./styles";
import { locales } from "./locales";
import { Controller } from "react-hook-form";
import { Button, Input } from "@components/atoms";
import { isValidCPF } from "src/utils/function";

export const SignUpScreen = () => {
  const {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    isValid,
    onSubmit,
    submitted,
    handleNavigateToSignIn,
  } = useSignUp();

  return (
    <InteractiveTemplate isScrollable>
      <View style={styles.container}>
        <Text style={styles.title}>{locales.header.title}</Text>
        <Text style={styles.subtitle}>{locales.header.subtitle}</Text>
        <View style={styles.contentInputs}>
          <View style={styles.containerInput}>
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
                  errorMensage={
                    submitted ? errors.lastName?.message : undefined
                  }
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
          </View>

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
            // rules={{
            //   required: locales.form.document.errorRequired,
            //   pattern: {
            //     value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
            //     message: locales.form.document.errorPattern,
            //   },
            //   validate: {
            //     validCpf: (value) =>
            //       isValidCPF(value) || locales.form.document.errorInvalid,
            //   },
            // }}
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
                  onChange(text);
                }}
                value={value}
                maxLength={14}
              />
            )}
            name="document"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.password.errorRequired,
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
                returnKeyType="next"
                isPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            rules={{
              required: locales.form.confirmPassword.errorRequired,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label={locales.form.confirmPassword.label}
                errorMensage={
                  submitted ? errors.confirmPassword?.message : undefined
                }
                iconLeft="lock-closed-outline"
                placeholder={locales.form.confirmPassword.placeholder}
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
            name="confirmPassword"
          />
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Button
            label={locales.form.buttons.signUp}
            onPress={() => handleSubmit(onSubmit)()}
            isDisabled={(!isValid && submitted) || isSubmitting}
            isLoading={isSubmitting}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>{locales.footer.textFooter}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handleNavigateToSignIn}>
          <Text style={styles.textSubscribe}>
            {locales.form.buttons.signIn}
          </Text>
        </TouchableOpacity>
      </View>
    </InteractiveTemplate>
  );
};
