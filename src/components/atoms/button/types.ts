import { PressableProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IButtonProps extends Omit<PressableProps, 'onPress'> {
  label: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  testIDPrefix?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onPress?: (...args: any[]) => void;
  variante?: 'primary' | 'secondary';
}
