import { Text, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "src/store/authStore";

export const AdjustmentsScreen = () => {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 20,
        }}
      >
        Adjustments
      </Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text
          style={{
            fontSize: 18,
            color: "#007BFF",
            textDecorationLine: "underline",
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
};
