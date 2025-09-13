import { StyleSheet, ActivityIndicator, useColorScheme } from "react-native";
import { theme } from "../constants/theme";
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  const colorValue = t.colors.primary;

  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator size="large" color={colorValue} />
    </ThemedView>
  );
};

export default ThemedLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
