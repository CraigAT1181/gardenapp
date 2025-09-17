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
          backgroundColor: t.colors.tabBarBackground,
          borderTopColor: t.colors.tabBarBorder,
          borderTopWidth: 2,
          paddingTop: 10,
          height: 100,
        },
        tabBarActiveTintColor: t.colors.tabBarActive,
        tabBarInactiveTintColor: t.colors.tabBarInactive,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "home" : "home-outline"}
              color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="garden"
        options={{
          title: "Garden",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "leaf" : "leaf-outline"}
              color={focused ? t.colors.iconColorFocused : t.colors.iconColor}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listings"
        options={{
          title: "Listings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={24}
              name={focused ? "newspaper" : "newspaper-outline"}
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
