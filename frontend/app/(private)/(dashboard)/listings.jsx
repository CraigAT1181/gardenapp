import { StyleSheet, Text } from "react-native";

// Comonents
import ThemedView from "../../../components/ThemedView";

const Listings = () => {
  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>Listings Page</Text>
    </ThemedView>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
