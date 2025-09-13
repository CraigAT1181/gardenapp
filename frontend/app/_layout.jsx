import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

// Contexts
import { UserProvider } from "../contexts/userContext";

const RootLayout = () => {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          title: "",
        }}
      ></Stack>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  logo: {
    width: 54,
    height: 54,
  },
});
