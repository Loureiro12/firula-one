import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    backgroundColor: theme.colors.neutral[200],
    borderRadius: theme.radii.lg,
    padding: theme.spacing[4],
    marginTop: theme.spacing[4],
    alignItems: "center",
  },
  title: {
    color: theme.colors.neutral[800],
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold,
    marginTop: theme.spacing[3],
  },
  subtitle: {
    color: theme.colors.neutral[700],
    fontSize: theme.typography.fontSizes.sm,
    textAlign: "center",
    marginTop: theme.spacing[2],
    marginBottom: theme.spacing[4],
  },
});
