import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing[3],
    flex: 1,
    borderRadius: theme.radii['full'],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
  },
  // Variantes do container
  primaryContainer: {
    borderWidth: 0,
  },
  secondaryContainer: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary[100],
  },
  // Variantes do label
  primaryLabel: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.white,
  },
  secondaryLabel: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.primary[100],
  }
});
