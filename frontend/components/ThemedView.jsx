import { useColorScheme, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { theme } from "../constants/theme";

const ThemedView = ({ style, safe = false, ...props }) => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  const bgColor = t.colors.background;

  const insets = useSafeAreaInsets();

  if (!safe) {
    return <View style={[{ backgroundColor: bgColor }, style]} {...props} />;
  }

  return (
    <View
      style={[
        {
          backgroundColor: bgColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
