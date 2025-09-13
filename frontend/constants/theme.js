// constants/theme.ts
export const theme = {
  light: {
    colors: {
      // Base
      background: "#FAFBF7", // very light warm off-white (paper / garden beds)
      surface: "#FFFFFF", // cards / headers
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
      background: "#0B0F0A", // deep near-black with green bias
      surface: "#0F1720", // dark charcoal surface
      border: "#1F2A24", // deep forest border
      overlay: "rgba(255,255,255,0.04)",

      // Text
      text: "#F6F8F2", // soft off-white for readability
      title: "#FFFFFF",
      muted: "#9AA098", // muted olive-gray for secondary text
      inputText: "#E6E6DA", // lighter input text

      // Brand / Actions (muted versions for dark)
      primary: "#40C057", // slightly brighter green for visibility on dark
      secondary: "#C78B60", // warm terracotta accent
      success: "#34D399",
      warning: "#F59E0B",
      danger: "#FB7185",
      textOnPrimary: "#082113",

      // Icons
      iconColor: "#B7C1B0",
      iconColorFocused: "#86E38F",

      // Tabs
      tabBarBackground: "#0F1720",
      tabBarBorder: "#1F2A24",
      tabBarActive: "#86E38F",
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
