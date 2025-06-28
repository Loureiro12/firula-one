import { View } from "react-native";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Skeleton } from "@components/molecules";

import { PendingTaskCard } from "./components/PendingTaskCard";

import { usePendingProfile } from "./hooks";
import { styles } from "./styles";

export const PendingProfileScreen = () => {
  const { handleGoBack, loadingData } = usePendingProfile();

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
          <PendingTaskCard
            title="Complete seu perfil"
            description="Para continuar usando o aplicativo, complete seu perfil com as informações necessárias."
          />
          <PendingTaskCard
            title="Adicione uma foto de perfil"
            description="Para melhorar a experiência, adicione uma foto de perfil."
          />
        </>
      )}
    </ContentPageTemplate>
  );
};
