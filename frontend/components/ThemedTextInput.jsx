import { useColorScheme, TextInput } from "react-native";
import { theme } from "../constants/theme";

const ThemedTextInput = ({ style, ...props }) => {
  const scheme = useColorScheme() || "light";
  const t = theme[scheme];

  const boxColor = scheme === "light" ? t.colors.overlay : t.colors.muted;

  return (
    <TextInput
      style={[
        {
          backgroundColor: boxColor,
          color: t.colors.inputText,
          paddingHorizontal: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
