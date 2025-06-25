import { View } from "react-native";

import { Skeleton } from "@components/molecules";

import { CardStatistic } from "../CardStatistic";

import { styles } from "./styles";
import { ICardStatisticProps } from "./types";

export const ContainerCardStatistic = ({
  loading = false,
}: ICardStatisticProps) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <>
          <Skeleton width={160} height={80} radius={8} align="flex-start" />
          <Skeleton width={160} height={80} radius={8} align="flex-start" />
          <Skeleton width={160} height={80} radius={8} align="flex-start" />
          <Skeleton width={160} height={80} radius={8} align="flex-start" />
        </>
      ) : (
        <>
          <CardStatistic label="Ocupação" value="86%" />
          <CardStatistic label="Cancelamento" value="4%" />
          <CardStatistic label="No Show" value="10%" />
          <CardStatistic label="Faturamento" value="R$ 2.000,00" />
        </>
      )}
    </View>
  );
};
