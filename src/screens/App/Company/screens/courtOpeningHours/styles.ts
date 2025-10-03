import { StyleSheet } from 'react-native';
import { theme } from '../../../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.neutral[50],
  },

  scrollContainer: {
    flexGrow: 1,
    // padding: theme.spacing[4],
  },
  statsContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[4],
    marginBottom: theme.spacing[6],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing[3],
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
    marginHorizontal: theme.spacing[4],
  },

  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[3],
    borderRadius: theme.radii.full,
    marginTop: theme.spacing[3],
  },

  statusIndicatorComplete: {
    backgroundColor: theme.colors.green[50],
  },

  statusIndicatorIncomplete: {
    backgroundColor: theme.colors.yellow[50],
  },

  statusText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    marginLeft: theme.spacing[2],
  },

  statusTextComplete: {
    color: theme.colors.green[100],
  },

  statusTextIncomplete: {
    color: theme.colors.yellow[100],
  },

  schedulesContainer: {
    gap: theme.spacing[4],
    marginBottom: theme.spacing[6],
  },

  sectionTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.semibold,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[4],
  },

  emptyState: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    borderStyle: 'dashed',
  },

  emptyStateIcon: {
    marginBottom: theme.spacing[4],
  },

  emptyStateTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[2],
    textAlign: 'center',
  },

  emptyStateDescription: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[500],
    textAlign: 'center',
    lineHeight: 22,
  },

  actionsContainer: {
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[200],
    padding: theme.spacing[4],
    paddingBottom: theme.spacing[10],
  },

  actionRow: {
    flexDirection: 'row',
    gap: theme.spacing[3],
  },

  primaryButton: {
    flex: 2,
    backgroundColor: theme.colors.primary[100],
    borderRadius: theme.radii.lg,
    paddingVertical: theme.spacing[4],
    paddingHorizontal: theme.spacing[6],
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonDisabled: {
    backgroundColor: theme.colors.neutral[300],
  },

  primaryButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.white,
  },

  primaryButtonTextDisabled: {
    color: theme.colors.neutral[500],
  },

  secondaryButton: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.neutral[300],
    borderRadius: theme.radii.lg,
    paddingVertical: theme.spacing[4],
    paddingHorizontal: theme.spacing[6],
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[700],
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.neutral[50],
  },

  loadingText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    marginTop: theme.spacing[3],
  },

  errorContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[6],
    margin: theme.spacing[4],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.error,
  },

  errorTitle: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.error,
    marginBottom: theme.spacing[2],
    textAlign: 'center',
  },

  errorMessage: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
    textAlign: 'center',
    marginBottom: theme.spacing[4],
    lineHeight: 22,
  },

  errorButton: {
    backgroundColor: theme.colors.error,
    borderRadius: theme.radii.md,
    paddingVertical: theme.spacing[3],
    paddingHorizontal: theme.spacing[6],
  },

  errorButtonText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.white,
  },

  // Quick actions
  quickActionsContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.lg,
    padding: theme.spacing[4],
    marginBottom: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  quickActionsTitle: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[3],
  },

  quickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing[2],
  },

  quickActionButton: {
    backgroundColor: theme.colors.neutral[50],
    borderRadius: theme.radii.md,
    paddingVertical: theme.spacing[2],
    paddingHorizontal: theme.spacing[3],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  quickActionButtonText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[700],
  },
});
