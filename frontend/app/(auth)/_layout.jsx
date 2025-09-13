import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Views
import GuestView from "../../components/auth/GuestView";

const AuthLayout = () => {
  return (
    <GuestView>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </GuestView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
