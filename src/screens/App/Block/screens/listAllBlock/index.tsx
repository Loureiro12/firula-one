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
import { Skeleton } from "@components/molecules";
import { theme } from "../../../../../styles/theme";
import { useListAllBlock } from "./hooks";
import { BlockCard } from "./components/BlockCard";
import { styles as blockCardStyles } from "./components/styles";
import { styles } from "./styles";

const SkeletonBlockCard = () => (
  <View style={blockCardStyles.container}>
    {/* Image skeleton */}
    <View style={blockCardStyles.imageContainer}>
      <Skeleton height={160} radius={8} isFullWidth />
    </View>
    
    <View style={blockCardStyles.content}>
      {/* Header skeleton */}
      <View style={blockCardStyles.header}>
        <View style={blockCardStyles.titleContainer}>
          {/* Block name skeleton */}
          <Skeleton height={24} width={180} radius={4} align="flex-start" />
          {/* Block type skeleton */}
          <View style={{ marginTop: 4 }}>
            <Skeleton height={16} width={120} radius={4} align="flex-start" />
          </View>
        </View>
        {/* Edit button skeleton */}
        <Skeleton height={36} width={36} radius={6} />
      </View>
      
      {/* Info items skeleton */}
      <View style={blockCardStyles.infoContainer}>
        {/* Location info */}
        <View style={blockCardStyles.infoItem}>
          <Skeleton height={16} width={200} radius={4} align="flex-start" />
        </View>
        {/* Price info */}
        <View style={blockCardStyles.infoItem}>
          <Skeleton height={16} width={150} radius={4} align="flex-start" />
        </View>
      </View>
      
      {/* Configure button skeleton */}
      <Skeleton height={48} radius={6} isFullWidth />
    </View>
  </View>
);

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
    hasOpeningHours,
    retry,
  } = useListAllBlock();

  const renderBlock = ({ item }: { item: any }) => (
    <BlockCard
      block={item}
      typeBlockName={getTypeBlockName(item.typeBlockId)}
      hasOpeningHours={hasOpeningHours(item)}
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

    if (blocks.length === 0) {
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
