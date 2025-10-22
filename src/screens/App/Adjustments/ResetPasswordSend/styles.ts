import { StyleSheet } from "react-native";
import { theme } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[2],
    flex: 1,
    justifyContent: "center",
  },
  infoText: {
    marginBottom: theme.spacing[10],
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
  },
  title: {
    fontSize: theme.typography.fontSizes["2xl"],
    fontWeight: "bold",
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[4],
    textAlign: "center",
  },
  subTitle: {
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[500],
    marginBottom: theme.spacing[2],
  },
});
