import { Text, View } from "react-native";

import { Card } from "@components/atoms";
import { ICardProps } from "@components/atoms/Card/types";

import { styles } from "./styles";
import { Skeleton } from "@components/molecules";
import { IUpcomingReservationsBoxProps } from "./types";

const mockReservations: ICardProps[] = [
  {
    id: "1",
    title: "Time do Carlos",
    description: "Hoje, 19:00 - 20:00",
    type: "Confirmed",
  },
  {
    id: "2",
    title: "Pelada dos Amigos",
    description: "Hoje, 10:00 - 12:00",
    type: "Pending",
  },
  {
    id: "3",
    title: "Futebol do João",
    description: "Amanhã, 15:00 - 16:00",
    type: "Confirmed",
  },
  {
    id: "4",
    title: "Treino da Equipe",
    description: "Sábado, 09:00 - 11:00",
    type: "Pending",
  },
  {
    id: "5",
    title: "Jogo do Campeonato",
    description: "Domingo, 14:00 - 16:00",
    type: "Confirmed",
  },
  {
    id: "6",
    title: "Treino de Futsal",
    description: "Segunda-feira, 18:00 - 19:00",
    type: "Pending",
  },
];

export const UpcomingReservationsBox = ({
  isLoading,
}: IUpcomingReservationsBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximas Reservas</Text>
      {isLoading ? (
        <View style={styles.containerSkeleton}>
          <Skeleton isFullWidth height={60} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={60} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={60} radius={8} align="flex-start" />
          <Skeleton isFullWidth height={60} radius={8} align="flex-start" />
        </View>
      ) : (
        <>
          {mockReservations.map((reservation, index) => (
            <>
              <Card
                key={reservation.id}
                id={reservation.id}
                type={reservation.type}
                title={reservation.title}
                description={reservation.description}
              />
              {index < mockReservations.length - 1 && (
                <View style={styles.separator} />
              )}
            </>
          ))}
        </>
      )}
    </View>
  );
};
