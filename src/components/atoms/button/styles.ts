import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary['100'],
    paddingVertical: theme.spacing[3.5],
    width: '100%',
    borderRadius: theme.radii['lg'],
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
  },
  label: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.white,
  }
});
