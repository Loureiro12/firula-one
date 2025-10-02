import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { IMultiSelect } from './types';
import { theme } from '@styles/theme';

export const MultiSelect = ({
  label,
  options,
  selectedValues,
  onSelectionChange,
  errorMessage,
  placeholder,
}: IMultiSelect) => {
  const toggleSelection = (value: string) => {
    const isSelected = selectedValues.includes(value);
    let newSelection: string[];
    
    if (isSelected) {
      newSelection = selectedValues.filter(item => item !== value);
    } else {
      newSelection = [...selectedValues, value];
    }
    
    onSelectionChange(newSelection);
  };

  const hasError = !!errorMessage;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[
        styles.optionsContainer,
        hasError && styles.optionsContainerError
      ]}>
        {options.length === 0 && placeholder && (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        {options.map((option, index) => {
          const isSelected = selectedValues.includes(option.value);
          const isLast = index === options.length - 1;
          
          return (
            <TouchableOpacity
              key={option.id}
              style={[styles.option, isLast && styles.lastOption]}
              onPress={() => toggleSelection(option.value)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.checkbox,
                isSelected && styles.checkboxSelected
              ]}>
                {isSelected && (
                  <Ionicons 
                    name="checkmark" 
                    size={14} 
                    color={theme.colors.white} 
                  />
                )}
              </View>
              <Text style={[
                styles.optionText,
                isSelected && styles.optionTextSelected
              ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {hasError && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};