// Tipos para gerenciamento de horários de funcionamento das quadras

export interface TimeSlot {
  startTime: string; // Formato "HH:mm"
  endTime: string;   // Formato "HH:mm"
  price: number;
  dayUse: boolean;
  dayUsePrice?: number; // Preço específico para day use
}

export interface DaySchedule {
  dayOfWeek: number; // 0-6 (Domingo a Sábado)
  isOpen: boolean;
  timeSlots: TimeSlot[];
}

export interface OpeningHours {
  id?: string;
  courtId: string;
  schedules: DaySchedule[];
}

// Tipos para formulário
export interface TimeSlotForm {
  startHour: string;
  startMinute: string;
  endHour: string;
  endMinute: string;
  price: string;
  dayUse: boolean;
  dayUsePrice: string;
  // Campos temporários para entrada livre de texto
  startTimeText?: string;
  endTimeText?: string; // Preço para day use como string para formulário
}

export interface DayScheduleForm {
  dayOfWeek: number;
  isOpen: boolean;
  timeSlots: TimeSlotForm[];
}

export interface OpeningHoursForm {
  schedules: DayScheduleForm[];
}

// Enums e constantes
export enum DayOfWeek {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

export const DAY_NAMES: Record<DayOfWeek, string> = {
  [DayOfWeek.SUNDAY]: 'Domingo',
  [DayOfWeek.MONDAY]: 'Segunda-feira',
  [DayOfWeek.TUESDAY]: 'Terça-feira',
  [DayOfWeek.WEDNESDAY]: 'Quarta-feira',
  [DayOfWeek.THURSDAY]: 'Quinta-feira',
  [DayOfWeek.FRIDAY]: 'Sexta-feira',
  [DayOfWeek.SATURDAY]: 'Sábado',
};

export const DAY_NAMES_SHORT: Record<DayOfWeek, string> = {
  [DayOfWeek.SUNDAY]: 'Dom',
  [DayOfWeek.MONDAY]: 'Seg',
  [DayOfWeek.TUESDAY]: 'Ter',
  [DayOfWeek.WEDNESDAY]: 'Qua',
  [DayOfWeek.THURSDAY]: 'Qui',
  [DayOfWeek.FRIDAY]: 'Sex',
  [DayOfWeek.SATURDAY]: 'Sáb',
};

// Utilitários de validação
export interface TimeValidationError {
  field: string;
  message: string;
}

export interface ScheduleValidationResult {
  isValid: boolean;
  errors: TimeValidationError[];
}