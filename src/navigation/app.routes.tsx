import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AdjustmentsScreen } from "@screens/App/Adjustments";
import { AgendaScreen } from "@screens/App/Agenda";
import { FinanceScreen } from "@screens/App/Finance";
import { HomeScreen } from "@screens/App/Home";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function AppRootStack() {

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
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agenda" component={AgendaScreen} />
      <Tab.Screen name="Finance" component={FinanceScreen} />
      <Tab.Screen name="Adjustments" component={AdjustmentsScreen} />
    </Tab.Navigator>
  );
}