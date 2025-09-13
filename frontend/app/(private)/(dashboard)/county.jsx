import { StyleSheet, Text } from "react-native";

// Comonents
import ThemedView from "../../../components/ThemedView";

const County = () => {
  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>County Page</Text>
    </ThemedView>
  );
};

export default County;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
