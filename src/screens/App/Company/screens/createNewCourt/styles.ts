import { StyleSheet } from "react-native";
import { theme } from '@styles/theme';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    gap: 16,
    paddingVertical: 20,
  },
  
  imagePickerContainer: {
    marginBottom: 16,
  },
  imageLabel: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: '500',
    color: theme.colors.neutral[700],
    marginBottom: 8,
  },
  imagePickerButton: {
    borderWidth: 2,
    borderColor: theme.colors.neutral[300],
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.neutral[50],
    minHeight: 120,
  },
  imagePickerText: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[500],
    textAlign: 'center',
    fontWeight: '500',
  },
  imagePlaceholder: {
    borderWidth: 2,
    borderColor: theme.colors.neutral[300],
    borderStyle: 'dashed',
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectedImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  selectedImageContainer: {
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  overlayContent: {
    alignItems: 'center',
    gap: 8,
  },
  overlayText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: '600',
    textAlign: 'center',
  },
  overlaySubtext: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizes.xs,
    textAlign: 'center',
    opacity: 0.9,
  },
  
  // Form sections
  sectionTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: '600',
    color: theme.colors.neutral[700],
    marginTop: 8,
    marginBottom: 8,
  },
  
  // Submit button
  submitButton: {
    marginTop: 20,
  },
});
