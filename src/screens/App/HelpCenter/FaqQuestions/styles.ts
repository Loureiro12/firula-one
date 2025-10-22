import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[4],
  },
  headerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    backgroundColor: theme.colors.neutral[200],
    padding: theme.spacing[4],
    borderRadius: theme.radii.lg,
    marginBottom: theme.spacing[3],
  },
  question: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.neutral[900],
  },
  answer: {
    marginTop: theme.spacing[2],
    color: theme.colors.neutral[700],
  },
  title: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[4],
  },
  subTitle: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[6],
  }
});
