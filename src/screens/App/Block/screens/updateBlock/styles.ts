import { StyleSheet } from "react-native";
import { theme } from "../../../../../styles/theme";

export const styles = StyleSheet.create({
  formContainer: {
    padding: theme.spacing[4],
    gap: theme.spacing[4],
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing[8],
  },

  loadingText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[600],
    marginTop: theme.spacing[4],
    textAlign: "center",
  },

  imagePickerContainer: {
    marginBottom: theme.spacing[2],
  },

  imageLabel: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[3],
  },

  selectedImageContainer: {
    position: "relative",
    borderRadius: theme.radii.lg,
    overflow: "hidden",
  },

  selectedImage: {
    width: "100%",
    height: 200,
    borderRadius: theme.radii.lg,
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  overlayContent: {
    alignItems: "center",
  },

  overlayText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.white,
    marginTop: theme.spacing[2],
  },

  overlaySubtext: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.white,
    marginTop: theme.spacing[1],
    textAlign: "center",
  },

  imagePlaceholder: {
    height: 200,
    borderRadius: theme.radii.lg,
    borderWidth: 2,
    borderColor: theme.colors.neutral[200],
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.neutral[50],
  },

  imagePickerButton: {
    alignItems: "center",
    padding: theme.spacing[4],
  },

  imagePickerText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[600],
    textAlign: "center",
  },

  switchContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  switchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing[2],
  },

  switchLabel: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
  },

  switchDescription: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    lineHeight: 20,
  },

  statusIndicator: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing[3],
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: theme.spacing[2],
  },

  statusDotActive: {
    backgroundColor: theme.colors.green[100],
  },

  statusDotInactive: {
    backgroundColor: theme.colors.neutral[400],
  },

  statusText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
  },

  statusTextActive: {
    color: theme.colors.green[100],
  },

  statusTextInactive: {
    color: theme.colors.neutral[600],
  },

  submitButton: {
    marginTop: theme.spacing[6],
  },
});
