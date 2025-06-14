import { PressableProps } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

export interface IconNavButtonProps extends PressableProps {
  label?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}
