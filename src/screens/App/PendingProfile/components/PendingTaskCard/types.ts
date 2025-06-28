import { TouchableOpacityProps } from "react-native";

export interface IPendingTaskCardProps extends TouchableOpacityProps {
  title: string;
  description: string;
}
