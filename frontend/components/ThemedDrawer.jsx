import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  StyleSheet,
  Image,
  useColorScheme,
  View,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../hooks/useUser";

// Assets
import profilePic from "../assets/icon.png";

// Components
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import ThemedLogo from "./ThemedLogo";
import { theme } from "../constants/theme";
import Spacer from "./Spacer";

function ThemedDrawer(props) {
  const { navigation } = props;
  const { user, logout } = useUser();

  const scheme = useColorScheme();
  const t = theme[scheme];

  const goTab = (tabName) => {
    navigation.navigate("(dashboard)", { screen: tabName });
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <ThemedView
        style={[{ backgroundColor: t.colors.background }, styles.header]}
      >
        <Image
          source={profilePic}
          resizeMode="contain"
          style={styles.profilePic}
        />
        <ThemedText>Hi {user.username}!</ThemedText>
        <Spacer height="20" />
        <Pressable onPress={handleLogout}>
          <ThemedText color={t.colors.danger}>Logout</ThemedText>
        </Pressable>
        <Spacer height="20" />
      </ThemedView>

      <View style={styles.hr} />
      <DrawerItem
        label="Profile"
        icon={() => <Ionicons name="person" size={20} />}
        onPress={() => router.replace("/profile")}
      />
      <DrawerItem
        label="Settings"
        icon={() => <Ionicons name="settings" size={20} />}
        onPress={() => router.replace("/settings")}
      />
      <View style={styles.hr} />
      {/* Tab Screen */}
      <DrawerItem
        label="Home"
        icon={() => <Ionicons name="home" size={20} />}
        onPress={() => goTab("home")}
      />
      <DrawerItem
        label="Garden"
        icon={() => <Ionicons name="leaf" size={20} />}
        onPress={() => goTab("garden")}
      />
      <DrawerItem
        label="Listings"
        icon={() => <Ionicons name="newspaper" size={20} />}
        onPress={() => goTab("listings")}
      />
      <View style={styles.hr} />
      <ThemedView style={styles.footer}>
        <ThemedLogo style={styles.logo} />
      </ThemedView>
    </DrawerContentScrollView>
  );
}

export default ThemedDrawer;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: 20,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
  },
  profilePic: {
    width: 72,
    height: 72,
    borderRadius: 25,
    marginBottom: 20,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
  },
  logo: {
    width: 150,
    height: 150,
  },
});
