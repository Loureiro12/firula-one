import { View } from "react-native";
import { useAuthStore } from "src/store/authStore";
import { ProfileEditActions } from "./components/ProfileEditActions";

import { styles } from "./styles";
import { UserHeader } from "./components/UserHeader";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { useAdjustments } from "./hooks";

export const AdjustmentsScreen = () => {
  const { logout } = useAuthStore();
  const {handleNavigationToEditProfile, user} = useAdjustments();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Ajustes",
      }}
    >
      <UserHeader
        name={user?.name || "Usuário"}
        role="Dono de Quadra"
        onEditProfile={handleNavigationToEditProfile}
      />

      <View style={styles.contentProfileEditActions}>
        <ProfileEditActions
          title="Conta e Quadra"
          item={[
            {
              label: "Empresa",
              iconName: "business-outline",
              routeName: "Company",
            },
            {
              label: "Quadras",
              iconName: "person-outline",
              // routeName: "ProfileEdit",
            },
            {
              label: "Notificações",
              iconName: "folder-outline",
              // routeName: "UserEdit",
            },
          ]}
        />

        <ProfileEditActions
          title="Acesso e Segurança"
          item={[
            {
              label: "Alterar Senha",
              iconName: "lock-closed-outline",
              // routeName: "ProfileEdit",
            },
            {
              label: "Segurança do App",
              iconName: "shield-checkmark-outline",
              // routeName: "UserEdit",
            },
          ]}
        />

        <ProfileEditActions
          title="Ajuda e Suporte"
          item={[
            {
              label: "Central de Ajuda",
              iconName: "help-circle-outline",
              // routeName: "ProfileEdit",
            },
            {
              label: "Fale com o Suporte",
              iconName: "chatbubble-ellipses-outline",
              // routeName: "UserEdit",
            },
            {
              label: "Sair da conta",
              iconName: "log-out-outline",
              function: handleLogout,
            },
          ]}
        />
      </View>
    </ContentPageTemplate>
  );
};
