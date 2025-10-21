import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: theme.radii.lg,
    paddingHorizontal: theme.spacing[3],
    flexDirection: "row",
    alignItems: "center",
  },
  contentDisabled: {
    backgroundColor: theme.colors.neutral[50],
    borderColor: theme.colors.neutral[200],
  },
  input: {
    flex: 1,
    height: "100%",
  },
  inputDisabled: {
    color: theme.colors.neutral[500],
  },
  label: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[2.5],
  },
  labelDisabled: {
    color: theme.colors.neutral[500],
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.typography.fontSizes.xs,
    marginTop: theme.spacing[1],
  },
});
