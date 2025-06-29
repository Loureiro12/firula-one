import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  skeletonContainer: {
    gap: theme.spacing[2],
    marginTop: theme.spacing[3],
  },
  noIssuesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing[4],
  },
  noIssuesText: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
    textAlign: "center",
    marginTop: theme.spacing[4],
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing[4],
  },
  errorText: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.error,
    textAlign: "center",
    marginTop: theme.spacing[4],
  },
  
});
