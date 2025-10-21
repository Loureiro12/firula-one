import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing[4],
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.neutral[100],
    borderRadius: theme.radii["2xl"],
    shadowColor: theme.colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[1],
    marginTop: theme.spacing[1],
    flex: 1,
    width: '100%',
  },
  companyName: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[1],
  },
  textLocation: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.gray.gray03,
  },
  textSmall: {
    fontSize: theme.typography.fontSizes.xs,
    color: theme.colors.neutral[500],
    // flex: 1,
  },
  buttonSeeDetails: {
    marginTop: theme.spacing[4],
    alignSelf: "flex-start",
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[4],
    backgroundColor: theme.colors.primary[100],
    borderRadius: theme.radii.lg,
    width: '100%',
    alignItems: 'center',
  },
  textButton: {
    color: theme.colors.white,
    fontWeight: theme.typography.fontWeights.medium,
  },
})