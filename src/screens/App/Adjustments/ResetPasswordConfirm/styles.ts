import { StyleSheet } from "react-native";
import { theme } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[2],
    flex: 1,
  },
  form: {
    gap: theme.spacing["3.5"],

  },
  hint: {
    marginBottom: theme.spacing[3],
    color: theme.colors.neutral[900],
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: theme.spacing[3],
    color: theme.colors.neutral[700],
    fontSize: theme.typography.fontSizes.sm,
  }
});
