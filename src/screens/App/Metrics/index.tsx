import { TabSwitcher } from "@components/molecules";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useMetrics } from "./hook";

export const MetricsScreen = () => {
  const { selectedTab, setSelectedTab, tabItems } = useMetrics();
  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Metricas",
      }}
    >
      <View style={styles.container}>
        <TabSwitcher
          items={tabItems}
          onChange={setSelectedTab}
          selectedValue={selectedTab}
        />
      </View>
    </ContentPageTemplate>
  );
};
