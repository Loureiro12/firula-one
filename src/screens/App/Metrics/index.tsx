import { View } from "react-native";

import { TabSwitcher } from "@components/molecules";
import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { ContainerCardStatistic } from "./components/ContainerCardStatistic";

import { styles } from "./styles";
import { useMetrics } from "./hook";
import { OccupationOfTheCourt } from "./components/OccupationOfTheCourt";
import { BillingChart } from "./components/BillingChart";
import { LastReservations } from "./components/LastReservations";

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
        <ContainerCardStatistic loading={false} />
        {/* <OccupationOfTheCourt />
        <BillingChart /> */}
        <LastReservations />
      </View>
    </ContentPageTemplate>
  );
};
