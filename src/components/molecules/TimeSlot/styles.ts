import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    marginBottom: theme.spacing[3],
  },

  containerError: {
    borderColor: theme.colors.error,
  },

  containerOverlapError: {
    borderColor: theme.colors.warning,
    backgroundColor: `${theme.colors.warning}10`, // 10% de opacidade
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing[3],
  },

  timeInfo: {
    flex: 1,
  },

  timeRange: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[1],
  },

  timeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[2],
  },

  priceText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
  },

  dayUseTag: {
    backgroundColor: theme.colors.primary[200],
    paddingHorizontal: theme.spacing[2],
    paddingVertical: theme.spacing[1],
    borderRadius: theme.radii.sm,
  },

  dayUseText: {
    fontSize: theme.typography.fontSizes.xs,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.primary[100],
  },

  headerControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[2],
  },

  removeButton: {
    padding: theme.spacing[1],
  },

  form: {
    paddingHorizontal: theme.spacing[3],
    paddingBottom: theme.spacing[3],
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[100],
  },

  timeGroup: {
    marginBottom: theme.spacing[4],
  },

  priceGroup: {
    marginBottom: theme.spacing[4],
  },

  label: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[700],
    marginBottom: theme.spacing[2],
  },

  timeInput: {
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.neutral[50],
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[900],
  },

  priceInput: {
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.neutral[50],
    borderRadius: theme.radii.md,
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    fontSize: theme.typography.fontSizes.base,
    color: theme.colors.neutral[900],
  },

  inputError: {
    borderColor: theme.colors.error,
  },

  errorText: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.error,
    marginTop: theme.spacing[1],
  },

  dayUseSection: {
    marginBottom: theme.spacing[4],
  },

  dayUseOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing[3],
  },

  dayUsePriceGroup: {
    marginTop: theme.spacing[3],
    paddingTop: theme.spacing[3],
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[200],
  },

  dayUseInfo: {
    flex: 1,
  },

  dayUseLabel: {
    fontSize: theme.typography.fontSizes.base,
    fontWeight: theme.typography.fontWeights.medium,
    color: theme.colors.neutral[900],
    marginBottom: theme.spacing[1],
  },

  dayUseDescription: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: theme.typography.fontWeights.regular,
    color: theme.colors.neutral[600],
  },
});