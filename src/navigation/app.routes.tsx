import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import { AdjustmentsScreen } from "@screens/App/Adjustments";
import { HomeScreen } from "@screens/App/Home";
import { ValidateReservations } from "@screens/App/ValidateReservations";
import { AppTabStackParamList } from "./types";
import { PendingProfileScreen } from "@screens/App/PendingProfile";
import { EditProfileScreen } from "@screens/App/EditProfile";
import { CreateCompanyScreen } from "@screens/App/Company/screens/createCompany";
import { CompanyScreen } from "@screens/App/Company/screens/listCompany";

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
          } else if (route.name === "Metrics") {
            iconName = focused ? "stats-chart" : "stats-chart-outline";
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
      {/* <Tab.Screen name="Agenda" component={AgendaScreen} /> */}
      {/* <Tab.Screen
        name="Metrics"
        component={MetricsScreen}
        options={{
          tabBarLabel: "Metricas",
        }}
      /> */}
      <Tab.Screen
        name="Adjustments"
        component={AdjustmentsScreen}
        options={{
          tabBarLabel: "Ajustes",
        }}
      />
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
      <Stack.Screen
        name="PendingProfileScreen"
        component={PendingProfileScreen}
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Company" component={CompanyScreen} />
      <Stack.Screen name="CreateCompany" component={CreateCompanyScreen} />
    </Stack.Navigator>
  );
}
