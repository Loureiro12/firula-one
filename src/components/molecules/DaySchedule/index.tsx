import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../../styles/theme";
import {
  DayScheduleForm,
  TimeSlotForm,
  DayOfWeek,
  DAY_NAMES,
} from "../../../types/openingHours";
import { TimeSlot } from "../TimeSlot/index";
import { styles } from "./styles";

interface DayScheduleProps {
  daySchedule: DayScheduleForm;
  onToggleDay: (dayOfWeek: number, isOpen: boolean) => void;
  onAddTimeSlot: (dayOfWeek: number) => void;
  onUpdateTimeSlot: (
    dayOfWeek: number,
    index: number,
    timeSlot: TimeSlotForm
  ) => void;
  onRemoveTimeSlot: (dayOfWeek: number, index: number) => void;
  errors?: Record<string, string>;
}

export const DaySchedule: React.FC<DayScheduleProps> = ({
  daySchedule,
  onToggleDay,
  onAddTimeSlot,
  onUpdateTimeSlot,
  onRemoveTimeSlot,
  errors = {},
}) => {
  const dayName = DAY_NAMES[daySchedule.dayOfWeek as DayOfWeek];
  const hasErrors = Object.keys(errors).some((key) =>
    key.startsWith(`schedules.${daySchedule.dayOfWeek}`)
  );

  const handleToggleDay = () => {
    onToggleDay(daySchedule.dayOfWeek, !daySchedule.isOpen);
  };

  const handleAddTimeSlot = () => {
    onAddTimeSlot(daySchedule.dayOfWeek);
  };

  const handleUpdateTimeSlot = (index: number, timeSlot: TimeSlotForm) => {
    onUpdateTimeSlot(daySchedule.dayOfWeek, index, timeSlot);
  };

  const handleRemoveTimeSlot = (index: number) => {
    onRemoveTimeSlot(daySchedule.dayOfWeek, index);
  };

  return (
    <View style={[styles.container, hasErrors && styles.containerError]}>
      {/* Cabeçalho do dia */}
      <View style={styles.dayHeader}>
        <View style={styles.dayInfo}>
          <Text style={styles.dayName}>{dayName}</Text>
          <Text
            style={[
              styles.dayStatus,
              daySchedule.isOpen
                ? styles.dayStatusOpen
                : styles.dayStatusClosed,
            ]}
          >
            {daySchedule.isOpen ? "Aberto" : "Fechado"}
          </Text>
        </View>

        <View style={styles.dayControls}>
          <Switch
            value={daySchedule.isOpen}
            onValueChange={handleToggleDay}
            trackColor={{
              false: theme.colors.neutral[300],
              true: theme.colors.primary[200],
            }}
            thumbColor={
              daySchedule.isOpen
                ? theme.colors.primary[100]
                : theme.colors.neutral[500]
            }
            ios_backgroundColor={theme.colors.neutral[300]}
          />
        </View>
      </View>

      {/* Slots de horário */}
      {daySchedule.isOpen && (
        <View style={styles.timeSlotsContainer}>
          {daySchedule.timeSlots.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons
                name="time-outline"
                size={32}
                color={theme.colors.neutral[400]}
              />
              <Text style={styles.emptyStateText}>
                Nenhum horário configurado
              </Text>
              <Text style={styles.emptyStateSubtext}>
                Adicione pelo menos um horário de funcionamento
              </Text>
            </View>
          ) : (
            <View style={styles.timeSlotsList}>
              {daySchedule.timeSlots.map((timeSlot, index) => (
                <TimeSlot
                  key={index}
                  timeSlot={timeSlot}
                  onUpdate={(updatedTimeSlot) =>
                    handleUpdateTimeSlot(index, updatedTimeSlot)
                  }
                  onRemove={() => handleRemoveTimeSlot(index)}
                  errors={Object.keys(errors).reduce((acc, key) => {
                    if (
                      key.startsWith(
                        `schedules.${daySchedule.dayOfWeek}.timeSlots.${index}`
                      )
                    ) {
                      const fieldKey = key.replace(
                        `schedules.${daySchedule.dayOfWeek}.timeSlots.${index}.`,
                        ""
                      );
                      acc[fieldKey] = errors[key];
                    }
                    return acc;
                  }, {} as Record<string, string>)}
                />
              ))}
            </View>
          )}

          {/* Botão adicionar horário */}
          <TouchableOpacity
            style={styles.addTimeSlotButton}
            onPress={handleAddTimeSlot}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={20} color={theme.colors.primary[100]} />
            <Text style={styles.addTimeSlotText}>Adicionar horário</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Erros de validação */}
      {hasErrors && (
        <View style={styles.errorContainer}>
          {Object.entries(errors).map(([key, message]) => {
            if (
              key.startsWith(`schedules.${daySchedule.dayOfWeek}`) &&
              !key.includes("timeSlots")
            ) {
              return (
                <Text key={key} style={styles.errorText}>
                  {message}
                </Text>
              );
            }
            return null;
          })}
        </View>
      )}
    </View>
  );
};
