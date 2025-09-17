import { StyleSheet, Text } from "react-native";
import { useUser } from "../../../hooks/useUser";

// Comonents
import ThemedView from "../../../components/ThemedView";

const Home = () => {
  const { user } = useUser();

  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>Home Page</Text>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
