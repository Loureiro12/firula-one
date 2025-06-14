import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    borderRadius: theme.radii.lg,
    padding: theme.spacing["3"],
    flexDirection: "row",
  },
  content: {
    gap: theme.spacing["1"],
  },
  title: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.neutral[800],
  },
  description: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[600],
    fontWeight: theme.typography.fontWeights.regular,
  },
  containerFlag: {

    paddingVertical: theme.spacing["1"],
    paddingHorizontal: theme.spacing["2"],
    borderRadius: theme.radii.md,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  textFlag: {
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: theme.typography.fontWeights.bold,
  },
});
