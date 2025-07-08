import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.primary[200],
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  labelContainer: {
    flex: 1,
  }, 
  label: {
    color: theme.colors.neutral[700],
    fontSize:theme.typography.fontSizes.xs,
    fontWeight: "400",
    marginLeft: 8,
    flex: 1,
  }
})