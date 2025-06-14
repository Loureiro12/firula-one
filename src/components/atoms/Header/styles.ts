import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing[5],
    paddingBottom: theme.spacing[0],
    paddingTop: theme.spacing[2],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.colors.neutral["100"],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral["200"],
    zIndex: 1000,
    height: 120,
  },
  label : {
    color: theme.colors.neutral["900"],
    fontSize: theme.typography.fontSizes.base,
    fontWeight: '400',
  }
})