import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { DailySummaryCard } from "./components/DailySummaryCard";
import { ActionButtonsContainer } from "./components/ActionButtonsContainer";
import { UpcomingReservationsBox } from "./components/UpcomingReservationsBox";

import { useHome } from "./hooks";
import { AccountPendingAlert } from "./components/AccountPendingAlert";

export const HomeScreen = () => {
  const {
    isLoading,
    handleNavigateToValidateReservations,
    handleNavigateToPendingProfile,
    hasProfileIssues,
  } = useHome();
  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Firula - One",
        rightIcon: "notifications-outline",
        rightIconOnPress: () => console.log("Settings Pressed"),
      }}
    >
      {hasProfileIssues && !isLoading && (
        <AccountPendingAlert onPress={handleNavigateToPendingProfile} />
      )}

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
      <ActionButtonsContainer
        onValidateReservationsPress={handleNavigateToValidateReservations}
        onCreateReservationPress={() =>
          console.log("Create Reservation Pressed")
        }
        onManageReservationsPress={() =>
          console.log("Manage Reservations Pressed")
        }
      />
      <UpcomingReservationsBox isLoading={isLoading} />
    </ContentPageTemplate>
  );
};
