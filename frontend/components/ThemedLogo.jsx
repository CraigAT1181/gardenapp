import { Image, useColorScheme } from "react-native";

// Images
import DarkLogo from "../assets/dark.png";
import LightLogo from "../assets/light.png";

const ThemedLogo = ({ style }) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image style={style} source={logo} />;
};

export default ThemedLogo;
