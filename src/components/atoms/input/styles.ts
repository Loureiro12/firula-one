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
  input: {
    flex: 1,
    height: "100%",
  },
  label: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[2.5],
  },
  errorText: {
    color: theme.colors.error,
    fontSize: theme.typography.fontSizes.xs,
    marginTop: theme.spacing[1],
  },
});
