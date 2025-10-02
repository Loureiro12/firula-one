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
    alignItems: "flex-start",
  },
  contentContainer: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    color: theme.colors.neutral[700],
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: "600",
    marginBottom: 4,
  },
  label: {
    color: theme.colors.neutral[700],
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: "400",
    marginBottom: 8,
    flex: 1,
  },
  topicsContainer: {
    gap: 4,
  },
  topicRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
  },
  topicBullet: {
    color: theme.colors.neutral[600],
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: "600",
    lineHeight: 16,
  },
  topicText: {
    color: theme.colors.neutral[600],
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: "400",
    flex: 1,
    lineHeight: 16,
  },
  // Mantido para compatibilidade
  labelContainer: {
    flex: 1,
  }, 
})