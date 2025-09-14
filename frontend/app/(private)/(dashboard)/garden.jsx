import { StyleSheet, Text } from "react-native";

// Comonents
import ThemedView from "../../../components/ThemedView";

const Garden = () => {
  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>Garden Page</Text>
    </ThemedView>
  );
};

export default Garden;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
