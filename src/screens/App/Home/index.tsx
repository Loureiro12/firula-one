import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Text, View } from "react-native";
import { DailySummaryCard } from "./components/DailySummaryCard";

export const HomeScreen = () => {
  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Firula - One",
        rightIcon: "notifications-outline",
        rightIconOnPress: () => console.log("Settings Pressed"),
      }}
    >
      <DailySummaryCard
        cards={[
          {
            title: "Reservas Hoje",
            value: "12",
            info: "+3 que ontem",
          },
          {
            title: "Receita Hoje",
            value: "R$ 480",
            info: "+R$120 que ontem",
          },
        ]}
      />
    </ContentPageTemplate>
  );
};
