import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AdjustmentsScreen } from "@screens/App/Adjustments";
import { AgendaScreen } from "@screens/App/Agenda";
import { FinanceScreen } from "@screens/App/Finance";
import { HomeScreen } from "@screens/App/Home";
import { ValidateReservations } from "@screens/App/ValidateReservations";

export type AppTabStackParamList = {
  TabRootStack: undefined;
  ValidateReservations: undefined;
  Home: undefined;
  Agenda: undefined;
  Finance: undefined;
  Adjustments: undefined;
};

const Tab = createBottomTabNavigator<AppTabStackParamList>();
const Stack = createNativeStackNavigator<AppTabStackParamList>();

function TabRootStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Agenda") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Finance") {
            iconName = focused ? "wallet" : "wallet-outline";
          } else if (route.name === "Adjustments") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1FBD58",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Finance" component={FinanceScreen} />
      <Tab.Screen name="Adjustments" component={AdjustmentsScreen} />
    </Tab.Navigator>
  );
}

export default function AppRootStack() {
  return (
    <Stack.Navigator
      initialRouteName="TabRootStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TabRootStack" component={TabRootStack} />
      <Stack.Screen
        name="ValidateReservations"
        component={ValidateReservations}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
}
