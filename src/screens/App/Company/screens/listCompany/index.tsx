import { Text, View } from "react-native";

import { Button } from "@components/atoms";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { useCompany } from "./hooks";

import { styles } from "./styles";
import { CardCompany } from "../../components/CardCompany";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppTabStackParamList } from "@navigation/types";

export const CompanyScreen = () => {
  const { handleGoBack, handleAddNewCompany, companyData } = useCompany();
  const navigation = useNavigation<NativeStackNavigationProp<AppTabStackParamList>>();

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
              mobilePhone={company.mobilePhone}
              companyAddress={company.companyAddress[0]}
              onPress={() => navigation.navigate("UpdateCompany", { companyId: company.id })}
            />
          ))}
      </View>
    </ContentPageTemplate>
  );
};
