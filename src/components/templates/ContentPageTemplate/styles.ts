import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: theme.colors.gray.gray08,
    },
    contentContainer: {
      flex: 1,
      // paddingBottom: theme.spacing[10],
      paddingHorizontal: theme.spacing[5],
    },
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
    },
    fixedContent: {
      flex: 1,
    },
    footerContainer: {
      backgroundColor: theme.colors.white,
      paddingHorizontal: theme.spacing[5],
      paddingBottom: theme.spacing[5],
      paddingTop: theme.spacing[4],
      borderTopWidth: 1,
      borderTopColor: theme.colors.neutral[200],
    },
})