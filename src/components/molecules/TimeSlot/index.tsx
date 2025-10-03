import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../styles/theme';
import { TimeSlotForm } from '../../../types/openingHours';
import { styles } from './styles';

interface TimeSlotProps {
  timeSlot: TimeSlotForm;
  onUpdate: (timeSlot: TimeSlotForm) => void;
  onRemove: () => void;
  errors?: Record<string, string>;
}

export const TimeSlot: React.FC<TimeSlotProps> = ({
  timeSlot,
  onUpdate,
  onRemove,
  errors = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasErrors = Object.keys(errors).length > 0;

  const formatTime = (hour: string, minute: string) => {
    // Se ambos estão vazios, retornar string vazia
    if (!hour && !minute) {
      return '';
    }
    
    // Se apenas a hora está preenchida
    if (hour && !minute) {
      return hour;
    }
    
    // Se apenas minuto está preenchido (caso raro)
    if (!hour && minute) {
      return `:${minute}`;
    }
    
    // Se ambos estão preenchidos
    return `${hour}:${minute}`;
  };

  const handleFieldUpdate = (field: keyof TimeSlotForm, value: string | boolean) => {
    onUpdate({
      ...timeSlot,
      [field]: value,
    });
  };

  // Manipular input de valor monetário com máscara
  const handleMoneyInput = (value: string, field: 'price' | 'dayUsePrice') => {
    const maskedValue = applyMoneyMask(value);
    handleFieldUpdate(field, maskedValue);
  };

  // Aplicar máscara de horário (HH:MM)
  const applyTimeMask = (value: string) => {
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');
    
    // Aplica a máscara baseada na quantidade de dígitos
    if (digits.length === 0) return '';
    if (digits.length === 1) return digits;
    if (digits.length === 2) {
      // Validar se a hora não é maior que 23
      const hour = parseInt(digits);
      if (hour > 23) return '23';
      return digits;
    }
    if (digits.length === 3) {
      const hour = digits.slice(0, 2);
      const minute = digits.slice(2);
      // Validar se a hora não é maior que 23
      if (parseInt(hour) > 23) return '23:' + minute;
      return `${hour}:${minute}`;
    }
    if (digits.length >= 4) {
      const hour = digits.slice(0, 2);
      const minute = digits.slice(2, 4);
      // Validar se a hora não é maior que 23 e minuto não é maior que 59
      const validHour = parseInt(hour) > 23 ? '23' : hour;
      const validMinute = parseInt(minute) > 59 ? '59' : minute;
      return `${validHour}:${validMinute}`;
    }
    
    return digits;
  };

  // Aplicar máscara de valor monetário (R$ 0,00)
  const applyMoneyMask = (value: string) => {
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');
    
    if (digits.length === 0) return '';
    
    // Converte para centavos e formata
    const number = parseInt(digits) / 100;
    
    return number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // Remover máscara de valor monetário para obter apenas números
  const removeMoneyMask = (value: string) => {
    return value.replace(/\D/g, '');
  };

  // Processar texto de horário em campos estruturados
  const parseTimeText = (timeText: string) => {
    if (!timeText) return { hour: '', minute: '' };
    
    // Remove caracteres não numéricos
    const digits = timeText.replace(/\D/g, '');
    
    if (digits.length === 0) return { hour: '', minute: '' };
    if (digits.length <= 2) {
      return { hour: digits.padStart(2, '0'), minute: '00' };
    } else {
      const hour = digits.slice(0, 2);
      const minute = digits.slice(2, 4);
      return {
        hour: hour.padStart(2, '0'),
        minute: minute.padStart(2, '0')
      };
    }
  };

  // Processar horário quando o campo perde foco
  const handleTimeBlur = (field: 'startTime' | 'endTime') => {
    const timeText = field === 'startTime' ? timeSlot.startTimeText : timeSlot.endTimeText;
    
    if (!timeText) return;
    
    const { hour, minute } = parseTimeText(timeText);
    
    if (field === 'startTime') {
      onUpdate({
        ...timeSlot,
        startHour: hour,
        startMinute: minute,
        startTimeText: hour && minute ? `${hour}:${minute}` : timeText,
      });
    } else {
      onUpdate({
        ...timeSlot,
        endHour: hour,
        endMinute: minute,
        endTimeText: hour && minute ? `${hour}:${minute}` : timeText,
      });
    }
  };

  // Entrada livre de horário - com máscara durante digitação
  const handleTimeInput = (value: string, field: 'startTime' | 'endTime') => {
    // Aplicar máscara de horário
    const maskedValue = applyTimeMask(value);
    
    // Atualizar diretamente o campo correspondente como texto livre
    if (field === 'startTime') {
      onUpdate({
        ...timeSlot,
        startTimeText: maskedValue,
        // Também limpar os campos estruturados quando o usuário está editando
        startHour: '',
        startMinute: '',
      });
    } else {
      onUpdate({
        ...timeSlot,
        endTimeText: maskedValue,
        // Também limpar os campos estruturados quando o usuário está editando  
        endHour: '',
        endMinute: '',
      });
    }
  };

  const handleRemove = () => {
    Alert.alert(
      'Remover horário',
      'Tem certeza que deseja remover este horário?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: onRemove,
        },
      ]
    );
  };

  const startTimeText = timeSlot.startTimeText ?? '';
  const endTimeText = timeSlot.endTimeText ?? '';

  // Para exibição no cabeçalho, usar campos estruturados se disponíveis e campos de texto estão vazios
  const displayStartTime = startTimeText || formatTime(timeSlot.startHour || '', timeSlot.startMinute || '');
  const displayEndTime = endTimeText || formatTime(timeSlot.endHour || '', timeSlot.endMinute || '');
  
  // Verificar se há erros de sobreposição para destacar visualmente
  const hasOverlapError = Object.values(errors).some(error => 
    error.includes('sobrepõe') || error.includes('idêntico')
  );

  return (
    <View style={[
      styles.container, 
      hasErrors && styles.containerError,
      hasOverlapError && styles.containerOverlapError
    ]}>
      {/* Cabeçalho compacto */}
      <TouchableOpacity 
        style={styles.header}
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.7}
      >
        <View style={styles.timeInfo}>
          <Text style={styles.timeRange}>
            {displayStartTime && displayEndTime 
              ? `${displayStartTime} - ${displayEndTime}`
              : displayStartTime || displayEndTime || 'Configurar horário'
            }
          </Text>
          <View style={styles.timeDetails}>
            <Text style={styles.priceText}>
              {timeSlot.dayUse 
                ? `Day Use: R$ ${timeSlot.dayUsePrice || '0,00'}`
                : `R$ ${timeSlot.price || '0,00'}`
              }
            </Text>
            {timeSlot.dayUse && (
              <View style={styles.dayUseTag}>
                <Text style={styles.dayUseText}>Day Use</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.headerControls}>
          <TouchableOpacity 
            style={styles.removeButton}
            onPress={handleRemove}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons 
              name="trash-outline" 
              size={18} 
              color={theme.colors.error} 
            />
          </TouchableOpacity>
          
          <Ionicons 
            name={isExpanded ? 'chevron-up' : 'chevron-down'} 
            size={20} 
            color={theme.colors.neutral[400]} 
          />
        </View>
      </TouchableOpacity>

      {/* Formulário expandido */}
      {isExpanded && (
        <View style={styles.form}>
          {/* Campo de horário inicial */}
          <View style={styles.timeGroup}>
            <Text style={styles.label}>Horário inicial (HH:MM)</Text>
            <TextInput
              style={[styles.timeInput, errors.startHour && styles.inputError]}
              value={startTimeText}
              onChangeText={(value) => handleTimeInput(value, 'startTime')}
              onBlur={() => handleTimeBlur('startTime')}
              placeholder="08:00"
              keyboardType="numeric"
              maxLength={5}
              returnKeyType="next"
            />
            {errors.startHour && (
              <Text style={styles.errorText}>{errors.startHour}</Text>
            )}
          </View>

          {/* Campo de horário final */}
          <View style={styles.timeGroup}>
            <Text style={styles.label}>Horário final (HH:MM)</Text>
            <TextInput
              style={[styles.timeInput, errors.endHour && styles.inputError]}
              value={endTimeText}
              onChangeText={(value) => handleTimeInput(value, 'endTime')}
              onBlur={() => handleTimeBlur('endTime')}
              placeholder="18:00"
              keyboardType="numeric"
              maxLength={5}
              returnKeyType="done"
            />
            {errors.endHour && (
              <Text style={styles.errorText}>{errors.endHour}</Text>
            )}
          </View>

          {/* Preço normal - só aparece quando dayUse está desabilitado */}
          {!timeSlot.dayUse && (
            <View style={styles.priceGroup}>
              <Text style={styles.label}>Preço (R$)</Text>
              <TextInput
                style={[styles.priceInput, errors.price && styles.inputError]}
                value={timeSlot.price}
                onChangeText={(value) => handleMoneyInput(value, 'price')}
                placeholder="0,00"
                keyboardType="numeric"
                returnKeyType="done"
              />
              {errors.price && (
                <Text style={styles.errorText}>{errors.price}</Text>
              )}
            </View>
          )}

          {/* Day Use */}
          <View style={styles.dayUseSection}>
            <View style={styles.dayUseOption}>
              <View style={styles.dayUseInfo}>
                <Text style={styles.dayUseLabel}>Day Use</Text>
                <Text style={styles.dayUseDescription}>
                  Permitir uso durante todo o dia
                </Text>
              </View>
              
              <Switch
                value={timeSlot.dayUse}
                onValueChange={(value) => handleFieldUpdate('dayUse', value)}
                trackColor={{ 
                  false: theme.colors.neutral[300], 
                  true: theme.colors.primary[200] 
                }}
                thumbColor={timeSlot.dayUse ? theme.colors.primary[100] : theme.colors.neutral[500]}
                ios_backgroundColor={theme.colors.neutral[300]}
              />
            </View>

            {/* Campo de preço do Day Use */}
            {timeSlot.dayUse && (
              <View style={styles.dayUsePriceGroup}>
                <Text style={styles.label}>Preço Day Use (R$)</Text>
                <TextInput
                  style={[styles.priceInput, errors.dayUsePrice && styles.inputError]}
                  value={timeSlot.dayUsePrice}
                  onChangeText={(value) => handleMoneyInput(value, 'dayUsePrice')}
                  placeholder="0,00"
                  keyboardType="numeric"
                  returnKeyType="done"
                />
                {errors.dayUsePrice && (
                  <Text style={styles.errorText}>{errors.dayUsePrice}</Text>
                )}
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};