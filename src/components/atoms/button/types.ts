import { PressableProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IButtonProps extends PressableProps {
  label: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  testIDPrefix?: string;
}
