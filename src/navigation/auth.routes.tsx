import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/Auth/SignIn";
import { SignUpScreen } from "@screens/Auth/SignUp";
import ResetPasswordSendPublic from "@screens/Auth/ResetPasswordSend";
import { AuthRootStackParamList } from "./types";
import ResetPasswordConfirmScreen from "@screens/App/Adjustments/ResetPasswordConfirm";

const Stack = createNativeStackNavigator<AuthRootStackParamList>();

export default function AuthRootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ResetPasswordSendPublic"
        component={ResetPasswordSendPublic}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordConfirm"
        component={ResetPasswordConfirmScreen}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
}
