import { Text, View } from "react-native";

import { Button } from "@components/atoms";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { useCompany } from "./hooks";
import { CardCompany } from "./components/CardCompany";

import { styles } from "./styles";

export const CompanyScreen = () => {
  const { handleGoBack, handleAddNewCompany, companyData } = useCompany();

  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Minhas Empresas",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        {companyData &&
          companyData.length > 0 &&
          companyData.map((company) => (
            <CardCompany
              key={company.id}
              cnpj={company.cpf_cnpj}
              name={company.name}
              status={company.status}
            />
          ))}
        <View style={styles.containerButton}>
          <Button
            label="Cadastrar empresa"
            iconName="add-sharp"
            onPress={handleAddNewCompany}
          />
        </View>
      </View>
    </ContentPageTemplate>
  );
};
