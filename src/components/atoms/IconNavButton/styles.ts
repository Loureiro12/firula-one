import { StyleSheet } from "react-native";

import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing[2],
    padding: theme.spacing["3.5"],
    backgroundColor: theme.colors.neutral[20],
    borderRadius: theme.radii.lg,
    width: '30%',
    shadowColor: theme.colors.neutral[50],
    shadowOffset: {
      width: 0,
      height: 2,  
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentLabel: {
    alignItems: "center",
    maxWidth: 70,
    marginTop: theme.spacing[1],
  },
  label: {
    color: theme.colors.gray.gray05,
    fontSize: theme.typography.fontSizes.xs,
    fontFamily: theme.typography.fontWeights.bold,
    textAlign: "center",
  },
});
