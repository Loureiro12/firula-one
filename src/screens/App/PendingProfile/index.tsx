import { Text, Touchable, TouchableOpacity, View } from "react-native";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Skeleton } from "@components/molecules";

import { PendingTaskCard } from "./components/PendingTaskCard";

import { usePendingProfile } from "./hooks";
import { styles } from "./styles";

export const PendingProfileScreen = () => {
  const {
    handleGoBack,
    loadingData,
    hasProfileIssues,
    error,
    loadAccountStatus,
  } = usePendingProfile();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Perfil Pendente",
        onArrowBackPress: handleGoBack,
      }}
    >
      {loadingData ? (
        <View style={styles.skeletonContainer}>
          <Skeleton isFullWidth height={80} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={80} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={80} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={80} radius={8} align="flex-start" />
        </View>
      ) : (
        <>
          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={loadAccountStatus}>
                <Text style={{ color: "blue", marginTop: 10 }}>
                  Tentar novamente
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              {hasProfileIssues?.pendingData.length !== 0 ? (
                hasProfileIssues?.pendingData.map((issue) => (
                  <PendingTaskCard
                    key={issue.routeName}
                    title={issue.title}
                    description={issue.description}
                  />
                ))
              ) : (
                <View style={styles.noIssuesContainer}>
                  <Text style={styles.noIssuesText}>
                    Não há pendências no seu perfil.
                  </Text>
                </View>
              )}
            </>
          )}
        </>
      )}
    </ContentPageTemplate>
  );
};
