import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.spacing[4],
  },
  card: {
    backgroundColor: theme.colors.primary[100],
    padding: theme.spacing[4],
    borderRadius: theme.radii.lg,
    gap: theme.spacing[2],
    width: "48%",
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.white,
  },
  value: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.white,
  },
  info: {
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.white,
  },
});
