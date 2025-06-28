import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing[3],
    gap: theme.spacing[2],
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing[1],
  },
  title: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.neutral[800],
    flex: 1,
  },
  description: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[400],
    flex: 1,
  },
});
