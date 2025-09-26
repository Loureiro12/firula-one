import Ionicons from "@expo/vector-icons/Ionicons";

export interface BottomDrawerAction {
  label: string;
  onPress: () => void;
  variante?: 'primary' | 'secondary';
  iconName?: keyof typeof Ionicons.glyphMap;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface BottomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  actions?: BottomDrawerAction[];
}