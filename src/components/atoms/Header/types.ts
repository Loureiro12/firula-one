import Ionicons from "@expo/vector-icons/Ionicons";

export interface IHeaderProps {
  title?: string;
  onArrowBackPress?: () => void;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  rightIconOnPress?: () => void;
}
