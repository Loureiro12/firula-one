import { StyleSheet } from "react-native";
import { theme } from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  statsHeader: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[4],
    marginBottom: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  statsItem: {
    flex: 1,
    alignItems: 'center',
  },

  statsValue: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.bold,
    color: theme.colors.primary[100],
    marginBottom: theme.spacing[1],
  },

  statsLabel: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    textAlign: 'center',
  },

  statsDivider: {
    width: 1,
    height: 40,
    backgroundColor: theme.colors.neutral[200],
    marginHorizontal: theme.spacing[3],
  },

  listContainer: {
    paddingBottom: theme.spacing[4],
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing[8],
  },

  loadingText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    marginTop: theme.spacing[3],
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[8],
  },

  emptyStateIcon: {
    marginBottom: theme.spacing[4],
  },

  emptyStateTitle: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.neutral[900],
    textAlign: 'center',
    marginBottom: theme.spacing[2],
  },

  emptyStateDescription: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: theme.spacing[6],
  },

  emptyStateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary[100],
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[3],
    borderRadius: theme.radii.md,
  },

  emptyStateButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.white,
    marginLeft: theme.spacing[2],
  },

  errorState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[8],
  },

  errorStateIcon: {
    marginBottom: theme.spacing[4],
  },

  errorStateTitle: {
    fontSize: theme.typography.fontSizes.xl,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.neutral[900],
    textAlign: 'center',
    marginBottom: theme.spacing[2],
  },

  errorStateDescription: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: theme.spacing[6],
  },

  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary[100],
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[3],
    borderRadius: theme.radii.md,
  },

  retryButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.primary[100],
    marginLeft: theme.spacing[2],
  },

  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary[100],
    paddingVertical: theme.spacing[4],
    borderRadius: theme.radii.md,
  },

  addButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.white,
    marginLeft: theme.spacing[2],
  },
});
