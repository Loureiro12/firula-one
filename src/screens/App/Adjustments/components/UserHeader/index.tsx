import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IUserHeaderProps } from "./types";

export const UserHeader = ({ name, onEditProfile, role }: IUserHeaderProps) => {
  return (
    <View>
      <View style={styles.contentUserInfo}>
        <View style={styles.userImage} />
        <View>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textFunction}>{role}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonEditProfile}
        activeOpacity={0.7}
        onPress={onEditProfile}
      >
        <Ionicons
          name="create-outline"
          size={24}
          color={theme.colors.primary[100]}
        />
        <Text style={styles.textButton}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};
