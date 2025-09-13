import { StyleSheet, Text } from "react-native";

// Comonents
import ThemedView from "../../../components/ThemedView";

const Nation = () => {
  return (
    <ThemedView safe="true" style={styles.container}>
      <Text>Nation Page</Text>
    </ThemedView>
  );
};

export default Nation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
