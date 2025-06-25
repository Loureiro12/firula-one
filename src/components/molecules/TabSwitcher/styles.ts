import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing[2],
    backgroundColor: theme.colors.neutral[10],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    gap: theme.spacing[2],
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderRadius: 8,
  },
  label: {
    fontSize: theme.typography.fontSizes.sm,
  }
});
