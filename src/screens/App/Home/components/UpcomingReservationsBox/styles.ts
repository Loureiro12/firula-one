import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing[6],
  },
  title: {
    fontFamily: theme.typography.fontWeights.bold,
    fontSize: theme.typography.fontSizes.lg,
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
  }
});
