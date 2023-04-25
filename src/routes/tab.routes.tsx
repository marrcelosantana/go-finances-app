import { Platform } from "react-native";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Dashboard } from "@screens/Dashboard";
import { Register } from "@screens/Register";
import { Summary } from "@screens/Summary";

import { ChartPie, CurrencyDollar, List } from "phosphor-react-native";

import { useTheme } from "styled-components";

type TabRoutes = {
  dashboard: undefined;
  register: undefined;
  summary: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export type AppNavigatorRouterProps = BottomTabNavigationProp<TabRoutes>;

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.ORANGE,
        tabBarInactiveTintColor: theme.COLORS.TEXT,
        tabBarStyle: {
          height: Platform.OS === "android" ? "auto" : 50,
          width: "80%",
          borderRadius: 9999,
          marginBottom: 42,
          marginLeft: 35,
          position: "absolute",
          paddingTop: 30,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => <List size={24} color={color} />,
        }}
      />

      <Screen
        name="register"
        component={Register}
        options={{
          tabBarIcon: ({ color }) => <CurrencyDollar size={24} color={color} />,
        }}
      />

      <Screen
        name="summary"
        component={Summary}
        options={{
          tabBarIcon: ({ color }) => <ChartPie size={24} color={color} />,
        }}
      />
    </Navigator>
  );
}
