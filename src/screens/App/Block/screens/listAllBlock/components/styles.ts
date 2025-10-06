import { StyleSheet } from "react-native";
import { theme } from "../../../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    marginBottom: theme.spacing[4],
    shadowColor: theme.colors.neutral[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  imageContainer: {
    position: "relative",
    height: 160,
    borderTopLeftRadius: theme.radii.lg,
    borderTopRightRadius: theme.radii.lg,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.neutral[100],
    justifyContent: "center",
    alignItems: "center",
  },

  statusBadge: {
    position: "absolute",
    top: theme.spacing[3],
    right: theme.spacing[3],
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[1],
    borderRadius: theme.radii.sm,
  },

  statusActive: {
    backgroundColor: theme.colors.green[100],
  },

  statusInactive: {
    backgroundColor: theme.colors.neutral[500],
  },

  statusText: {
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: theme.typography.fontWeights.semibold,
  },

  statusTextActive: {
    color: theme.colors.white,
  },

  statusTextInactive: {
    color: theme.colors.white,
  },

  content: {
    padding: theme.spacing[4],
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: theme.spacing[3],
  },

  titleContainer: {
    flex: 1,
    marginRight: theme.spacing[2],
  },

  blockName: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[1],
  },

  blockType: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
  },

  editButton: {
    padding: theme.spacing[2],
    borderRadius: theme.radii.sm,
  },

  infoContainer: {
    marginBottom: theme.spacing[3],
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing[2],
  },

  infoText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[700],
    marginLeft: theme.spacing[2],
    flex: 1,
  },

  warningAlert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.yellow[50],
    padding: theme.spacing[3],
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing[3],
  },

  warningText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.yellow[100],
    marginLeft: theme.spacing[2],
    flex: 1,
  },

  configureButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing[3],
    borderRadius: theme.radii.md,
    borderWidth: 1,
  },

  configureButtonNotConfigured: {
    backgroundColor: theme.colors.primary[200],
    borderColor: theme.colors.primary[100],
  },

  configureButtonConfigured: {
    backgroundColor: theme.colors.green[50],
    borderColor: theme.colors.green[100],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing[3],
    borderRadius: theme.radii.md,
    gap: theme.spacing[2],
  },

  configureButtonText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    marginLeft: theme.spacing[2],
  },

  configureButtonTextNotConfigured: {
    color: theme.colors.primary[100],
  },

  configureButtonTextConfigured: {
    color: theme.colors.green[100],
  },
});
