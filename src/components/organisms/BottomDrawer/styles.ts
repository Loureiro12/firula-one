import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: theme.colors.white,
    padding: 24,
  },
  handleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  handle: {
    backgroundColor: theme.colors.neutral[300],
    width: 40,
    height: 4,
    borderRadius: 2,
    alignSelf: "center",
  },
  content: {
    justifyContent: "space-between",
  },
  title: {
    fontSize: 26,
    fontWeight: "400",
    marginBottom: 12,
    color: theme.colors.neutral[900],
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 24,
    color: theme.colors.neutral[700],
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
});
