import { StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../constants/theme";

const DashboardLayout = () => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: t.tabBarBorder,
          paddingTop: 10,
          height: 100,
        },
        tabBarActiveTintColor: t.tabBarActive,
        tabBarInactiveTintColor: t.tabBarInactive,
      }}
    >
      <Tabs.Screen
        name="town"
        options={{
          title: "Town",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "business" : "business-outline"}
              color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="county"
        options={{
          title: "County",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "map" : "map-outline"}
              color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="nation"
        options={{
          title: "Nation",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "flag" : "flag-outline"}
              color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({});
