import { StyleSheet, useColorScheme, Pressable } from "react-native";

// Theme
import { theme } from "../constants/theme";

const ThemedButton = ({ bg = "primary", style, ...props }) => {
  const scheme = useColorScheme() ?? "light";
  const t = theme[scheme];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: t.colors[bg] },
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    padding: 18,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: 120,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
