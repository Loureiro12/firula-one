import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.md,
    marginBottom: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
  },

  containerError: {
    borderColor: theme.colors.error,
  },

  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[100],
  },

  dayInfo: {
    flex: 1,
  },

  dayName: {
    fontSize: theme.typography.fontSizes.lg,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[1],
  },

  dayStatus: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
  },

  dayStatusOpen: {
    color: theme.colors.success,
  },

  dayStatusClosed: {
    color: theme.colors.neutral[500],
  },

  dayControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
  },

  timeSlotsContainer: {
    paddingHorizontal: theme.spacing[4],
    paddingBottom: theme.spacing[4],
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing[8],
  },

  emptyStateText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[600],
    marginTop: theme.spacing[3],
    marginBottom: theme.spacing[1],
  },

  emptyStateSubtext: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[500],
    textAlign: 'center',
  },

  timeSlotsList: {
    // maxHeight: 300,
  },

  addTimeSlotButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing[3],
    paddingHorizontal: theme.spacing[4],
    backgroundColor: theme.colors.neutral[50],
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.primary[100],
    borderStyle: 'dashed',
    marginTop: theme.spacing[3],
    gap: theme.spacing[2],
  },

  addTimeSlotText: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.primary[100],
  },

  errorContainer: {
    paddingHorizontal: theme.spacing[4],
    paddingBottom: theme.spacing[3],
  },

  errorText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.error,
    marginBottom: theme.spacing[1],
  },
});