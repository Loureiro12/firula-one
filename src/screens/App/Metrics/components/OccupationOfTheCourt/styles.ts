import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing[7],
  },
  title: {
    fontFamily: theme.typography.fontWeights.bold,
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[900],
    fontWeight: theme.typography.fontWeights.bold,
    marginBottom: theme.spacing[5],
  },
});
