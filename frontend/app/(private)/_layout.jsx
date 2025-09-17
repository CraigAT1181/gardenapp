import { Drawer } from "expo-router/drawer";

// Views
import UserView from "../../components/auth/UserView";

// Components
import ThemedDrawer from "../../components/ThemedDrawer";
import { Ionicons } from "@expo/vector-icons";

// Theme
import { theme } from "../../constants/theme";
import { useColorScheme } from "react-native";

function PrivateLayout() {
  const scheme = useColorScheme();
  const t = theme[scheme];

  return (
    <UserView>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: t.colors.tabBarActive,
          drawerInactiveTintColor: t.colors.tabBarInactive,
        }}
        drawerContent={(props) => <ThemedDrawer {...props} />}
      >
        <Drawer.Screen
          name="(dashboard)"
          options={{
            headerShown: false,
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </UserView>
  );
}

export default PrivateLayout;
