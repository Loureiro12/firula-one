import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ISingleSelect } from './types';

export const SingleSelect = ({
  label,
  options,
  selectedValue,
  onSelectionChange,
  errorMessage,
  placeholder,
}: ISingleSelect) => {
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
          const isSelected = selectedValue === option.value;
          const isLast = index === options.length - 1;
          
          return (
            <TouchableOpacity
              key={option.id}
              style={[styles.option, isLast && styles.lastOption]}
              onPress={() => onSelectionChange(option.value)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.radioButton,
                isSelected && styles.radioButtonSelected
              ]}>
                {isSelected && (
                  <View style={styles.radioButtonInner} />
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