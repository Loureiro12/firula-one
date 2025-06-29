import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.gray.gray03,
    fontWeight: theme.typography.fontWeights.bold,
    marginBottom: theme.spacing["3"],
  },
  content: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.xl,
    borderWidth: 1,
    borderColor: theme.colors.gray.gray02,
  },
  contentButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing["2"],
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing["3.5"],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray.gray01,
  },
  textButton: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[800],
    fontWeight: theme.typography.fontWeights.regular,
  }
})