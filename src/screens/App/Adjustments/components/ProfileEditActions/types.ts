import { TouchableOpacityProps } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppTabStackParamList } from "@navigation/types";

export interface IProfileEditActionsProps extends TouchableOpacityProps {
  title: string;
  item: {
    label: string;
    iconName: keyof typeof Ionicons.glyphMap;
    routeName?: AppTabStackParamList[keyof AppTabStackParamList];
    function?: () => void;
  }[];
}
