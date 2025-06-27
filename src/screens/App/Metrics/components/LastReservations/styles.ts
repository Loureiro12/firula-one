import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing[6],
  },
  title: {
    fontFamily: theme.typography.fontWeights.bold,
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[900],
    fontWeight: theme.typography.fontWeights.bold,
    marginBottom: theme.spacing[5],
  },
  separator: {
    marginVertical: theme.spacing[2],
  },
  containerSkeleton: {
    marginTop: theme.spacing[2],
    gap: theme.spacing[2],
  },
});
