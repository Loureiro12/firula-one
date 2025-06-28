import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.warning,
    padding: theme.spacing[2],
    borderRadius: theme.radii.lg,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[2],
    marginTop: theme.spacing[3],
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.base,
  }
});