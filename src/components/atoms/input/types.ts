import { TextInputProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IInputProps extends TextInputProps {
  label?: string;
  errorMensage?: string;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
  isDisabled?: boolean;
  testIDPrefix?: string;
}
