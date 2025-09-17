// constants/theme.ts
// Modern garden-themed light + dark tokens
// Exported as `theme.light` and `theme.dark` for use with useColorScheme()

export const theme = {
  light: {
    colors: {
      // Base
      background: "#FFFFFF", // very light warm off-white (paper / garden beds)
      surface: "#FAFBF7", // cards / headers
      border: "#E6E7E4", // soft stone
      overlay: "rgba(13, 24, 14, 0.06)", // subtle green tint overlay

      // Text
      text: "#0F1720", // deep charcoal for high contrast
      title: "#0F1720",
      muted: "#6B7A6A", // muted olive-gray for secondary text
      inputText: "#0F1720", // dark input text

      // Brand / Actions (earthy + growth)
      primary: "#2F855A", // rich leaf green (action color)
      secondary: "#A97C50", // warm terracotta / seed-packet accent
      success: "#16A34A", // vivid growth green
      warning: "#D97706", // warm golden sun / alert
      danger: "#DC2626", // red for errors
      textOnPrimary: "#FFFFFF",

      // Icons
      iconColor: "#4B5563", // neutral slate for icons
      iconColorFocused: "#2F855A", // primary when focused

      // Tabs (bottom nav)
      tabBarBackground: "#FFFFFF",
      tabBarBorder: "#E6E7E4",
      tabBarActive: "#2F855A",
      tabBarInactive: "#9AA098",

      // Headers (stack)
      headerBackground: "#FFFFFF",
      headerBorder: "#E6E7E4",
      headerTitle: "#0F1720",
      headerTint: "#0F1720", // back button / icons
      statusBarStyle: "dark", // 'light' | 'dark'
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
    radii: { sm: 6, md: 10, lg: 16, xl: 24 },
  },

  dark: {
    colors: {
      // Base
      // original deep warm brown anchor
      entryBackground: "#2e1600", // very dark warm brown anchor
      // slightly lifted background to avoid feeling too heavy while keeping warmth
      background: "#80462b", // lifted dark brown (good for surfaces behind content)
      surface: "#0F1720", // dark charcoal surface for cards / panels
      border: "#25332B", // deep forest border (subtle, not pure black)
      overlay: "rgba(0,0,0,0.45)", // subtle dark overlay for modals/tooltips

      // Text
      text: "#F6F8F2", // soft off-white for readability
      title: "#FFFFFF",
      muted: "#9AA098", // muted olive-gray for secondary text
      inputText: "#E6E6DA", // lighter input text

      // Brand / Actions (muted but visible on dark)
      primary: "#40C057", // bright leaf green for visibility on dark
      secondary: "#C78B60", // warm terracotta accent
      success: "#34D399",
      warning: "#F59E0B",
      danger: "#FB7185",
      textOnPrimary: "#082113",

      // Icons
      iconColor: "#B7C1B0",
      iconColorFocused: "#FFFFFF",

      // Tabs
      // Use entryBackground as the deepest tab base and a slightly lighter
      // background for the overall app so the tab sits distinct but harmonious.
      tabBarBackground: "#3b1f0f", // slightly lighter than entryBackground
      // Make border subtle and semi-transparent rather than pure white
      tabBarBorder: "rgba(255,255,255,0.06)",
      tabBarActive: "#FFFFFF",
      tabBarInactive: "#6B7280",

      // Headers
      headerBackground: "#0F1720",
      headerBorder: "#1F2A24",
      headerTitle: "#F6F8F2",
      headerTint: "#F6F8F2",
      statusBarStyle: "light",
    },
    typography: {
      h1: { fontSize: 28, fontWeight: "700", lineHeight: 34 },
      title: { fontSize: 20, fontWeight: "700", lineHeight: 26 },
      body: { fontSize: 16, fontWeight: "400", lineHeight: 22 },
      caption: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
    },
    radii: { sm: 6, md: 10, lg: 16, xl: 24 },
  },
};

export default theme;
