import { useColorScheme, Text } from "react-native";
import { theme } from "../constants/theme";

const ThemedText = ({ variant, color, style, ...props }) => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  const variantStyle = t.typography[variant];
  const colorValue = t.colors[color] ?? color;

  return (
    <Text style={{ color: colorValue, ...variantStyle, style }} {...props} />
  );
};

export default ThemedText;
