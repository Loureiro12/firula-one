import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
