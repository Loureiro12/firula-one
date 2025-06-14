import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { DailySummaryCard } from "./components/DailySummaryCard";
import { ActionButtonsContainer } from "./components/ActionButtonsContainer";
import { UpcomingReservationsBox } from "./components/UpcomingReservationsBox";
import { OccupationOfTheCourt } from "./components/OccupationOfTheCourt";

import { useHome } from "./hooks";

export const HomeScreen = () => {
  const { isLoading } = useHome();
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
        isLoading={isLoading}
      />
      <OccupationOfTheCourt isLoading={isLoading} />
      <ActionButtonsContainer />
      <UpcomingReservationsBox isLoading={isLoading} />
    </ContentPageTemplate>
  );
};
