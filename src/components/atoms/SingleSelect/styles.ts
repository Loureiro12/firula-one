import { StyleSheet } from 'react-native';
import { theme } from '@styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: theme.typography.fontSizes.sm,
    fontWeight: '500',
    color: theme.colors.neutral[700],
    marginBottom: 8,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: theme.colors.neutral[300],
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    paddingVertical: 4,
  },
  optionsContainerError: {
    borderColor: theme.colors.error[500],
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[100],
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.neutral[300],
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: theme.colors.primary[100],
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary[100],
  },
  optionText: {
    flex: 1,
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[700],
  },
  optionTextSelected: {
    color: theme.colors.primary[100],
    fontWeight: '500',
  },
  errorText: {
    fontSize: theme.typography.fontSizes.xs,
    color: theme.colors.error[500],
    marginTop: 4,
  },
  placeholder: {
    fontSize: theme.typography.fontSizes.sm,
    color: theme.colors.neutral[500],
    fontStyle: 'italic',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});