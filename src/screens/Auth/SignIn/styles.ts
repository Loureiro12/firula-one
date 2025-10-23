import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentInputs: {
    width: "100%",
    gap: theme.spacing["2"],
    marginBottom: theme.spacing["5"],
  },
  title: {
    fontSize: theme.typography.fontSizes["2xl"],
    fontWeight: "bold",
    color: theme.colors.primary["100"],
    marginBottom: theme.spacing["2"],
  },
  subtitle: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[500],
    marginBottom: theme.spacing["4"],
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing["1"],
  },
  textFooter: {
    color: theme.colors.neutral[500],
    fontSize: theme.typography.fontSizes.sm,
  },
  textSubscribe: {
    color: theme.colors.primary["100"],
    fontWeight: "bold",
  },
  textForgotPassword: {
    color: theme.colors.primary["100"],
    fontSize: theme.typography.fontSizes.sm,
    marginBottom: theme.spacing["4"],
  },
  buttonForgotPassword: {
    alignSelf: "flex-end",
  }
});
