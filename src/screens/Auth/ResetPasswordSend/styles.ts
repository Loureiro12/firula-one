import { StyleSheet } from "react-native";
import { theme } from "src/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[2],
    flex: 1,
  },
  hint: {
    marginBottom: theme.spacing[3],
    color: theme.colors.neutral[900],
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: theme.spacing[6],
    color: theme.colors.neutral[700],
    fontSize: theme.typography.fontSizes.sm,
  },
  buttonContainer: {
    marginTop: 24,
  },
});
