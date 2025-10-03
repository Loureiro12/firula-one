import { useState, useCallback, useMemo } from 'react';
import { 
  OpeningHoursForm, 
  DayScheduleForm, 
  TimeSlotForm, 
  DayOfWeek, 
  ScheduleValidationResult,
  TimeValidationError 
} from '../types/openingHours';

const DEFAULT_TIME_SLOT: TimeSlotForm = {
  startHour: '',
  startMinute: '',
  endHour: '',
  endMinute: '',
  price: '',
  dayUse: false,
  dayUsePrice: '',
  startTimeText: '',
  endTimeText: '',
};

const createDefaultSchedule = (dayOfWeek: number): DayScheduleForm => ({
  dayOfWeek,
  isOpen: false,
  timeSlots: [],
});

export const useOpeningHoursForm = (initialData?: OpeningHoursForm) => {
  const [schedules, setSchedules] = useState<DayScheduleForm[]>(() => {
    if (initialData?.schedules) {
      return initialData.schedules;
    }
    
    // Criar horários padrão para todos os dias da semana
    return Array.from({ length: 7 }, (_, index) => createDefaultSchedule(index));
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Função para converter valor monetário mascarado para número
  const parseMoneyValue = (value: string): number => {
    if (!value) return 0;
    // Remove tudo que não é dígito ou vírgula/ponto
    const cleaned = value.replace(/[^\d,\.]/g, '');
    // Substitui vírgula por ponto para parseFloat
    const normalized = cleaned.replace(',', '.');
    return parseFloat(normalized) || 0;
  };

  // Alternar dia aberto/fechado
  const toggleDay = useCallback((dayOfWeek: number, isOpen: boolean) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.dayOfWeek === dayOfWeek 
        ? { ...schedule, isOpen, timeSlots: isOpen ? schedule.timeSlots : [] }
        : schedule
    ));

    // Limpar erros do dia quando fechado
    if (!isOpen) {
      setErrors(prev => {
        const newErrors = { ...prev };
        Object.keys(newErrors).forEach(key => {
          if (key.startsWith(`schedules.${dayOfWeek}`)) {
            delete newErrors[key];
          }
        });
        return newErrors;
      });
    }
  }, []);

  // Adicionar slot de horário
  const addTimeSlot = useCallback((dayOfWeek: number) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.dayOfWeek === dayOfWeek 
        ? { 
            ...schedule, 
            timeSlots: [...schedule.timeSlots, { ...DEFAULT_TIME_SLOT }] 
          }
        : schedule
    ));
  }, []);

    // Atualizar slot de horário
  const updateTimeSlot = useCallback((dayOfWeek: number, index: number, timeSlot: TimeSlotForm) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.dayOfWeek === dayOfWeek 
        ? {
            ...schedule,
            timeSlots: schedule.timeSlots.map((slot, i) => 
              i === index ? timeSlot : slot
            )
          }
        : schedule
    ));

    // Limpar apenas erros básicos de campos durante a edição
    setErrors(prev => {
      const newErrors = { ...prev };
      const slotPrefix = `schedules.${dayOfWeek}.timeSlots.${index}`;
      
      // Limpar erros de campos se eles foram preenchidos
      if (timeSlot.startHour && timeSlot.startMinute) {
        delete newErrors[`${slotPrefix}.startHour`];
      }
      if (timeSlot.endHour && timeSlot.endMinute) {
        delete newErrors[`${slotPrefix}.endHour`];
      }
      if (timeSlot.price) {
        delete newErrors[`${slotPrefix}.price`];
      }
      if (timeSlot.dayUsePrice) {
        delete newErrors[`${slotPrefix}.dayUsePrice`];
      }
      
      // Se dayUse foi desabilitado, limpar erro do dayUsePrice
      if (!timeSlot.dayUse) {
        delete newErrors[`${slotPrefix}.dayUsePrice`];
      }
      
      return newErrors;
    });
  }, []);

  // Função para limpar erros específicos (pode ser chamada pelos componentes)
  const clearFieldErrors = useCallback((fieldPattern: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach(key => {
        if (key.includes(fieldPattern)) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });
  }, []);  // Remover slot de horário
  const removeTimeSlot = useCallback((dayOfWeek: number, index: number) => {
    setSchedules(prev => prev.map(schedule => 
      schedule.dayOfWeek === dayOfWeek 
        ? {
            ...schedule,
            timeSlots: schedule.timeSlots.filter((_, i) => i !== index)
          }
        : schedule
    ));

    // Limpar erros do slot removido
    setErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(newErrors).forEach(key => {
        if (key.startsWith(`schedules.${dayOfWeek}.timeSlots.${index}`)) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });
  }, []);

  // Validação completa
  const validateForm = useCallback((): ScheduleValidationResult => {
    const validationErrors: TimeValidationError[] = [];
    const newErrors: Record<string, string> = {};

    schedules.forEach((schedule, scheduleIndex) => {
      if (!schedule.isOpen) return;

      // Validar se tem pelo menos um horário
      if (schedule.timeSlots.length === 0) {
        const error = {
          field: `schedules.${schedule.dayOfWeek}`,
          message: 'Adicione pelo menos um horário de funcionamento'
        };
        validationErrors.push(error);
        newErrors[error.field] = error.message;
        return;
      }

      // Validar cada slot de horário
      schedule.timeSlots.forEach((timeSlot, slotIndex) => {
        const slotPrefix = `schedules.${schedule.dayOfWeek}.timeSlots.${slotIndex}`;

        // Validar horário inicial
        if (!timeSlot.startHour || !timeSlot.startMinute) {
          const error = {
            field: `${slotPrefix}.startHour`,
            message: 'Horário inicial é obrigatório'
          };
          validationErrors.push(error);
          newErrors[error.field] = error.message;
        } else {
          // Validar formato do horário inicial
          const startHour = parseInt(timeSlot.startHour);
          const startMinute = parseInt(timeSlot.startMinute);
          
          if (isNaN(startHour) || startHour < 0 || startHour > 23) {
            const error = {
              field: `${slotPrefix}.startHour`,
              message: 'Hora inicial deve estar entre 00 e 23'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
          
          if (isNaN(startMinute) || startMinute < 0 || startMinute > 59) {
            const error = {
              field: `${slotPrefix}.startHour`,
              message: 'Minuto inicial deve estar entre 00 e 59'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
        }

        // Validar horário final
        if (!timeSlot.endHour || !timeSlot.endMinute) {
          const error = {
            field: `${slotPrefix}.endHour`,
            message: 'Horário final é obrigatório'
          };
          validationErrors.push(error);
          newErrors[error.field] = error.message;
        } else {
          // Validar formato do horário final
          const endHour = parseInt(timeSlot.endHour);
          const endMinute = parseInt(timeSlot.endMinute);
          
          if (isNaN(endHour) || endHour < 0 || endHour > 23) {
            const error = {
              field: `${slotPrefix}.endHour`,
              message: 'Hora final deve estar entre 00 e 23'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
          
          if (isNaN(endMinute) || endMinute < 0 || endMinute > 59) {
            const error = {
              field: `${slotPrefix}.endHour`,
              message: 'Minuto final deve estar entre 00 e 59'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
        }

        // Validar se horário final é posterior ao inicial
        if (timeSlot.startHour && timeSlot.startMinute && timeSlot.endHour && timeSlot.endMinute) {
          const startTime = parseInt(timeSlot.startHour) * 60 + parseInt(timeSlot.startMinute);
          const endTime = parseInt(timeSlot.endHour) * 60 + parseInt(timeSlot.endMinute);

          if (endTime <= startTime) {
            const error = {
              field: `${slotPrefix}.endHour`,
              message: 'Horário final deve ser posterior ao inicial'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
        }

        // Validar preço - só é obrigatório quando dayUse está desabilitado
        if (!timeSlot.dayUse) {
          const priceValue = parseMoneyValue(timeSlot.price);
          if (!timeSlot.price || priceValue <= 0) {
            const error = {
              field: `${slotPrefix}.price`,
              message: 'Preço deve ser maior que zero'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
        }

        // Validar preço do day use se habilitado
        if (timeSlot.dayUse) {
          const dayUsePriceValue = parseMoneyValue(timeSlot.dayUsePrice);
          if (!timeSlot.dayUsePrice || dayUsePriceValue <= 0) {
            const error = {
              field: `${slotPrefix}.dayUsePrice`,
              message: 'Preço do day use deve ser maior que zero'
            };
            validationErrors.push(error);
            newErrors[error.field] = error.message;
          }
        }

        // Verificar sobreposição de horários no mesmo dia
        schedule.timeSlots.forEach((otherSlot, otherIndex) => {
          if (slotIndex >= otherIndex) return; // Só compara com slots posteriores para evitar duplicatas

          if (
            timeSlot.startHour && timeSlot.startMinute && timeSlot.endHour && timeSlot.endMinute &&
            otherSlot.startHour && otherSlot.startMinute && otherSlot.endHour && otherSlot.endMinute
          ) {
            // Converter horários para minutos para facilitar comparação
            const currentStart = parseInt(timeSlot.startHour) * 60 + parseInt(timeSlot.startMinute);
            const currentEnd = parseInt(timeSlot.endHour) * 60 + parseInt(timeSlot.endMinute);
            const otherStart = parseInt(otherSlot.startHour) * 60 + parseInt(otherSlot.startMinute);
            const otherEnd = parseInt(otherSlot.endHour) * 60 + parseInt(otherSlot.endMinute);

            // Verificar se são horários idênticos
            const areIdentical = (currentStart === otherStart) && (currentEnd === otherEnd);
            
            // Verificar se há sobreposição (incluindo horários idênticos)
            // Condição: (início1 < fim2) && (início2 < fim1)
            const hasOverlap = (currentStart < otherEnd) && (otherStart < currentEnd);
            
            if (areIdentical) {
              // Erro específico para horários idênticos
              const error1 = {
                field: `${slotPrefix}.startHour`,
                message: 'Já existe um horário idêntico configurado'
              };
              validationErrors.push(error1);
              newErrors[error1.field] = error1.message;

              const otherSlotPrefix = `schedules.${schedule.dayOfWeek}.timeSlots.${otherIndex}`;
              const error2 = {
                field: `${otherSlotPrefix}.startHour`,
                message: 'Já existe um horário idêntico configurado'
              };
              validationErrors.push(error2);
              newErrors[error2.field] = error2.message;
            } else if (hasOverlap) {
              // Erro para sobreposição parcial
              const otherTimeText = `${Math.floor(otherStart / 60).toString().padStart(2, '0')}:${(otherStart % 60).toString().padStart(2, '0')} - ${Math.floor(otherEnd / 60).toString().padStart(2, '0')}:${(otherEnd % 60).toString().padStart(2, '0')}`;
              const currentTimeText = `${Math.floor(currentStart / 60).toString().padStart(2, '0')}:${(currentStart % 60).toString().padStart(2, '0')} - ${Math.floor(currentEnd / 60).toString().padStart(2, '0')}:${(currentEnd % 60).toString().padStart(2, '0')}`;
              
              const error1 = {
                field: `${slotPrefix}.startHour`,
                message: `Horário sobrepõe com o slot ${otherTimeText}`
              };
              validationErrors.push(error1);
              newErrors[error1.field] = error1.message;

              const otherSlotPrefix = `schedules.${schedule.dayOfWeek}.timeSlots.${otherIndex}`;
              const error2 = {
                field: `${otherSlotPrefix}.startHour`,
                message: `Horário sobrepõe com o slot ${currentTimeText}`
              };
              validationErrors.push(error2);
              newErrors[error2.field] = error2.message;
            }
          }
        });
      });
    });

    setErrors(newErrors);

    return {
      isValid: validationErrors.length === 0,
      errors: validationErrors
    };
  }, [schedules]);

  // Resetar formulário
  const resetForm = useCallback(() => {
    setSchedules(Array.from({ length: 7 }, (_, index) => createDefaultSchedule(index)));
    setErrors({});
  }, []);

  // Carregar dados
  const loadData = useCallback((data: OpeningHoursForm) => {
    setSchedules(data.schedules);
    setErrors({});
  }, []);

  // Estatísticas dos horários
  const stats = useMemo(() => {
    const openDays = schedules.filter(s => s.isOpen).length;
    const totalSlots = schedules.reduce((acc, s) => acc + s.timeSlots.length, 0);
    const hasErrors = Object.keys(errors).length > 0;

    return {
      openDays,
      totalSlots,
      hasErrors,
      isComplete: openDays > 0 && totalSlots > 0 && !hasErrors
    };
  }, [schedules, errors]);

  return {
    schedules,
    errors,
    stats,
    toggleDay,
    addTimeSlot,
    updateTimeSlot,
    removeTimeSlot,
    validateForm,
    resetForm,
    loadData,
    clearFieldErrors,
  };
};