import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral["100"],
  },
  contentContainer: {
    flex: 1,
    paddingBottom: theme.spacing[10],
    paddingHorizontal: theme.spacing[5],
    backgroundColor: theme.colors.neutral["100"],
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: theme.spacing[10],
  },
  content: {
    flex: 1,
  },
  fixedContent: {
    flex: 1,
  },
});
