import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
   marginTop: theme.spacing["8"],
  },
  contentInputs: {
    width: "100%",
    gap: theme.spacing["2"],
    marginBottom: theme.spacing["5"],
  },
  textDeleteAccount: {
    color: theme.colors.error,
    fontSize: theme.typography.fontSizes.sm,
    textAlign: "center",
    marginTop: theme.spacing["4"],
  }
});
