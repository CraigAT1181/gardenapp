import { StyleSheet, Image } from "react-native";
import { Link, Redirect } from "expo-router";
import { useUser } from "../hooks/useUser";

// Components
import Spacer from "../components/Spacer";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import ThemedButton from "../components/ThemedButton";
import ThemedLoader from "../components/ThemedLoader";
// import ThemedLogo from "../components/ThemedLogo";

const Index = () => {
  const { user, authChecked } = useUser();

  if (!authChecked) return <ThemedLoader />;

  if (user) return <Redirect href="/home" />;

  return (
    <ThemedView style={styles.container}>
      {/* <ThemedLogo /> */}

      <Spacer height="40" />
      <Link href={"/login"} asChild>
        <ThemedButton>
          <ThemedText color="textOnPrimary">Login</ThemedText>
        </ThemedButton>
      </Link>
      <Spacer />
      <Link href={"/register"} asChild>
        <ThemedButton bg="secondary">
          <ThemedText color="textOnPrimary">Register</ThemedText>
        </ThemedButton>
      </Link>
    </ThemedView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
