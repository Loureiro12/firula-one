import { View } from "react-native";

import { Button } from "@components/atoms";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { useCompany } from "./hooks";
import { CardCompany } from "./components/CardCompany";

import { styles } from "./styles";

export const CompanyScreen = () => {
  const { handleGoBack, handleAddNewCompany } = useCompany();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Minhas Empresas",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        <CardCompany />
        <View style={styles.containerButton}>
          <Button label="Cadastrar empresa" iconName="add-sharp" onPress={handleAddNewCompany} />
        </View>
      </View>
    </ContentPageTemplate>
  );
};
