import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { DaySchedule } from "../../../../../components/molecules/DaySchedule";
import { theme } from "../../../../../styles/theme";
import { useCourtOpeningHours } from "./hooks";
import { styles } from "./styles";
import { openingHoursLocales } from "./locales";

export const CourtOpeningHoursScreen = () => {
  const {
    isLoading,
    isSaving,
    schedules,
    errors,
    stats,
    toggleDay,
    addTimeSlot,
    updateTimeSlot,
    removeTimeSlot,
    handleGoBack,
    handleSave,
    handleReset,
    hasSchedules,
    canSave,
  } = useCourtOpeningHours();

  if (isLoading) {
    return (
      <ContentPageTemplate
        headerProps={{
          title: openingHoursLocales.title,
          onArrowBackPress: handleGoBack,
        }}
      >
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary[100]} />
          <Text style={styles.loadingText}>Carregando horários...</Text>
        </View>
      </ContentPageTemplate>
    );
  }

  return (
    <ContentPageTemplate
      headerProps={{
        title: openingHoursLocales.title,
        onArrowBackPress: handleGoBack,
      }}
      footerComponent={
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleGoBack}
            disabled={isSaving}
          >
            <Text style={styles.secondaryButtonText}>
              {openingHoursLocales.cancel}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              !canSave && styles.primaryButtonDisabled,
            ]}
            onPress={handleSave}
            disabled={!canSave}
          >
            {isSaving ? (
              <ActivityIndicator size="small" color={theme.colors.white} />
            ) : (
              <Text
                style={[
                  styles.primaryButtonText,
                  !canSave && styles.primaryButtonTextDisabled,
                ]}
              >
                {openingHoursLocales.save}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      }
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Estatísticas */}
          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <View style={styles.statsItem}>
                <Text style={styles.statsValue}>{stats.openDays}</Text>
                <Text style={styles.statsLabel}>
                  {stats.openDays === 1 ? "Dia aberto" : "Dias abertos"}
                </Text>
              </View>

              <View style={styles.statsDivider} />

              <View style={styles.statsItem}>
                <Text style={styles.statsValue}>{stats.totalSlots}</Text>
                <Text style={styles.statsLabel}>
                  {stats.totalSlots === 1 ? "Horário" : "Horários"}
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.statusIndicator,
                stats.isComplete
                  ? styles.statusIndicatorComplete
                  : styles.statusIndicatorIncomplete,
              ]}
            >
              <Ionicons
                name={stats.isComplete ? "checkmark-circle" : "alert-circle"}
                size={16}
                color={
                  stats.isComplete
                    ? theme.colors.green[100]
                    : theme.colors.yellow[100]
                }
              />
              <Text
                style={[
                  styles.statusText,
                  stats.isComplete
                    ? styles.statusTextComplete
                    : styles.statusTextIncomplete,
                ]}
              >
                {stats.isComplete
                  ? openingHoursLocales.stats.complete
                  : openingHoursLocales.stats.incomplete}
              </Text>
            </View>
          </View>

          {/* Ações rápidas */}
          {hasSchedules && (
            <View style={styles.quickActionsContainer}>
              <Text style={styles.quickActionsTitle}>Ações rápidas</Text>
              <View style={styles.quickActionsRow}>
                <TouchableOpacity
                  style={styles.quickActionButton}
                  onPress={handleReset}
                >
                  <Text style={styles.quickActionButtonText}>
                    {openingHoursLocales.actions.clearAll}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Lista de dias da semana */}
          <Text style={styles.sectionTitle}>Configuração por dia</Text>

          <View style={styles.schedulesContainer}>
            {schedules.map((schedule) => (
              <DaySchedule
                key={schedule.dayOfWeek}
                daySchedule={schedule}
                onToggleDay={toggleDay}
                onAddTimeSlot={addTimeSlot}
                onUpdateTimeSlot={updateTimeSlot}
                onRemoveTimeSlot={removeTimeSlot}
                errors={errors}
              />
            ))}
          </View>

          {!hasSchedules && (
            <View style={styles.emptyState}>
              <View style={styles.emptyStateIcon}>
                <Ionicons
                  name="calendar-outline"
                  size={48}
                  color={theme.colors.neutral[400]}
                />
              </View>
              <Text style={styles.emptyStateTitle}>
                {openingHoursLocales.emptyStates.allDaysClosed}
              </Text>
              <Text style={styles.emptyStateDescription}>
                {openingHoursLocales.emptyStates.allDaysClosedDescription}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </ContentPageTemplate>
  );
};
