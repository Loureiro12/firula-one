import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { IInputProps } from "./types";
import { useState } from "react";

export const Input = ({
  label,
  errorMensage,
  iconLeft,
  iconRight,
  isPassword = false,
  isDisabled = false,
  isFlex = false,
  testIDPrefix,
  ...rest
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View
      style={{
        width: "100%",
        flex: isFlex ? 1 : undefined,
      }}
      testID={`${testIDPrefix}-input-container`}
    >
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.content}>
        {iconLeft ? (
          <Ionicons
            name={iconLeft}
            size={24}
            color="gray"
            style={{ marginRight: 8 }}
          />
        ) : null}
        <TextInput
          {...rest}
          style={styles.input}
          secureTextEntry={showPassword && isPassword}
          editable={!isDisabled}
          testID="text-input"
        />
        {isPassword ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPassword(!showPassword)}
            disabled={isDisabled}
            testID={`${testIDPrefix}-toggle-password`}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
              testID={
                showPassword ? "icon-eye-off-outline" : "icon-eye-outline"
              }
            />
          </TouchableOpacity>
        ) : null}

        {iconRight ? (
          <Ionicons
            name={iconRight}
            size={24}
            color="gray"
            style={{ marginLeft: 8 }}
          />
        ) : null}
      </View>
      {errorMensage ? (
        <Text style={styles.errorText}>{errorMensage}</Text>
      ) : null}
    </View>
  );
};
