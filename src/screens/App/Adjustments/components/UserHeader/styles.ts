import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textName: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.primary[100],
  },
  textFunction: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.gray.gray03,
    marginTop: theme.spacing[1],
  },
  contentUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[3],
    marginBottom: theme.spacing[4],
    marginTop: theme.spacing[4],
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: theme.radii.full,
    backgroundColor: theme.colors.gray.gray01,
    marginBottom: theme.spacing[2],
  },
  buttonEditProfile: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing[2],
    padding: theme.spacing[2],
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.gray.gray02,
    marginBottom: theme.spacing[8],
    width: "40%",
  },
  textButton: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.primary[100],
    fontWeight: theme.typography.fontWeights.bold,
  },
});
