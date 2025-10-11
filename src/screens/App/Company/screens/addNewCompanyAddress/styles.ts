import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {},
  
  formContainer: {
    gap: 16,
    marginBottom: 100
  },
  
  cepSection: {
    gap: 12,
  },
  
  addressFieldsContainer: {
    gap: 16,
    marginTop: 20,
  },
  
  rowContainer: {
    flexDirection: "row",
    gap: 12,
  },
  
  flexInput: {
    flex: 1,
  },
  
  messageContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[200],
    marginVertical: 8,
  },
  
  messageText: {
    color: theme.colors.primary[100],
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    textAlign: "center",
  },
  
  submitButton: {
    marginTop: 24,
  },
});
