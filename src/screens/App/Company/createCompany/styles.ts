import { StyleSheet } from "react-native";
import { theme } from "@styles/theme";

export const styles = StyleSheet.create({
  container: {},
  
  formContainer: {
    gap: 16,
  },
  
  imagePickerContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 5,
    backgroundColor: theme.colors.primary[100],
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  
  imagePickerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  imagePickerText: {
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 18,
    textAlign: "center",
  },
  
  submitButton: {
    marginTop: 24,
  },
})