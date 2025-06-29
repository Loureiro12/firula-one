import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing[3],
    backgroundColor: theme.colors.primary[200],
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing[4],
    flexDirection: "row",
    gap: theme.spacing[2],
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  label: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[2],
    flex: 1,
  },
});
