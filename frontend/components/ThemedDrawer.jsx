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
// import profilePic from "../assets/profilepic.png";

// Components
import ThemedView from "./ThemedView";
import ThemedText from "./ThemedText";
import { theme } from "../constants/theme";

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
      <ThemedView style={styles.header}>
        {/* <Image
          source={profilePic}
          resizeMode="contain"
          style={styles.profilePic}
        /> */}
        <ThemedText>{user.email}</ThemedText>
        <Pressable onPress={handleLogout} style={{ marginTop: 10 }}>
          <ThemedText color={t.colors.danger}>Logout</ThemedText>
        </Pressable>
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
        label="County"
        icon={() => <Ionicons name="map" size={20} />}
        onPress={() => goTab("county")}
      />
      <View style={styles.hr} />
      {/* <ThemedView style={styles.footer}>
        
      </ThemedView> */}
    </DrawerContentScrollView>
  );
}

export default ThemedDrawer;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
  profilePic: {
    width: 72,
    height: 72,
    borderRadius: 25,
    marginBottom: 10,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
  },
});
