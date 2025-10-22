import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[4],
  },
  item: {
    paddingVertical: theme.spacing[3],
    paddingHorizontal: theme.spacing[4],
    backgroundColor: theme.colors.neutral[200],
    borderRadius: theme.radii.lg,
    marginBottom: theme.spacing[3],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[900],
    fontWeight: theme.typography.fontWeights.semibold,
  },
  title: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[4],
  },
  subTitle: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[6],
  }
});
