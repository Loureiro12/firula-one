import { theme } from "@styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'red',
    },
    contentContainer: {
      flex: 1,
      paddingBottom: theme.spacing[10],
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
})