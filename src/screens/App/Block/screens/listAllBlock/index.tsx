import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { theme } from "../../../../../styles/theme";
import { useListAllBlock } from "./hooks";
import { BlockCard } from "./components/BlockCard";
import { styles } from "./styles";

export const ListAllBlockScreen = () => {
  const {
    blocks,
    isLoading,
    refreshing,
    error,
    onRefresh,
    navigateToCreateCourt,
    navigateToEditCourt,
    navigateToCourtOpeningHours,
    handleGoBack,
    getTypeBlockName,
    retry,
  } = useListAllBlock();

  const renderBlock = ({ item }: { item: any }) => (
    <BlockCard
      block={item}
      typeBlockName={getTypeBlockName(item.typeBlockId)}
      onEdit={navigateToEditCourt}
      onConfigureHours={navigateToCourtOpeningHours}
    />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyStateIcon}>
        <Ionicons
          name="basketball-outline"
          size={64}
          color={theme.colors.neutral[400]}
        />
      </View>
      <Text style={styles.emptyStateTitle}>Nenhuma quadra cadastrada</Text>
      <Text style={styles.emptyStateDescription}>
        Você ainda não possui quadras cadastradas. Cadastre sua primeira quadra
        para começar.
      </Text>
      <TouchableOpacity
        style={styles.emptyStateButton}
        onPress={navigateToCreateCourt}
      >
        <Ionicons name="add" size={20} color={theme.colors.white} />
        <Text style={styles.emptyStateButtonText}>
          Cadastrar Primeira Quadra
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderErrorState = () => (
    <View style={styles.errorState}>
      <View style={styles.errorStateIcon}>
        <Ionicons
          name="alert-circle-outline"
          size={64}
          color={theme.colors.error}
        />
      </View>
      <Text style={styles.errorStateTitle}>Erro ao carregar quadras</Text>
      <Text style={styles.errorStateDescription}>
        {error || "Ocorreu um erro inesperado. Tente novamente."}
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={retry}>
        <Ionicons name="refresh" size={20} color={theme.colors.primary[100]} />
        <Text style={styles.retryButtonText}>Tentar Novamente</Text>
      </TouchableOpacity>
    </View>
  );

  const renderContent = () => {
    if (isLoading && blocks.length === 0) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={theme.colors.primary[100]} />
          <Text style={styles.loadingText}>Carregando quadras...</Text>
        </View>
      );
    }

    if (error && blocks.length === 0) {
      return renderErrorState();
    }

    if (blocks && blocks.length === 0) {
      return renderEmptyState();
    }

    return (
      <FlatList
        data={blocks}
        renderItem={renderBlock}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary[100]]}
            tintColor={theme.colors.primary[100]}
          />
        }
      />
    );
  };

  return (
    <ContentPageTemplate
      headerProps={{
        title: "Minhas quadras",
        onArrowBackPress: handleGoBack,
      }}
      footerComponent={
        <TouchableOpacity
          style={styles.addButton}
          onPress={navigateToCreateCourt}
        >
          <Ionicons name="add" size={20} color={theme.colors.white} />
          <Text style={styles.addButtonText}>Nova Quadra</Text>
        </TouchableOpacity>
      }
    >
      <View style={{ marginTop: 20 }}>{renderContent()}</View>
    </ContentPageTemplate>
  );
};
