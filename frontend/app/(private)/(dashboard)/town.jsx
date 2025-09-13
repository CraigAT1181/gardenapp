import { StyleSheet, Text } from "react-native";

// Comonents
import ThemedView from "../../../components/ThemedView";

const Town = () => {
  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>Town Page</Text>
    </ThemedView>
  );
};

export default Town;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
