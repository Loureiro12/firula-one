import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IProfileEditActionsProps } from "./types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";

export const ProfileEditActions = ({
  item,
  title,
  ...rest
}: IProfileEditActionsProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.content}>
        {item &&
          item.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              activeOpacity={0.7}
              onPress={
                typeof action.function === "function"
                  ? action.function
                  : action.routeName
                  ? () => {
                      if (action.routeName) {
                        navigation.navigate(
                          action.routeName as keyof AppTabStackParamList
                        );
                      }
                    }
                  : undefined
              }
              {...rest}
            >
              <View style={styles.contentButton}>
                <Ionicons
                  name={action.iconName}
                  size={24}
                  color={theme.colors.primary[100]}
                />
                <Text style={styles.textButton}>{action.label}</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={theme.colors.gray.gray03}
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};
