import { Text, View } from "react-native";

import { Skeleton } from "@components/molecules";

import { styles } from "./styles";
import { IDailySummaryCardProps } from "./types";

export const DailySummaryCard = ({
  cards,
  isLoading,
}: IDailySummaryCardProps) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.skeletonContainer}>
          <Skeleton width={160} height={100} radius={8} align="flex-start" />
          <Skeleton width={160} height={100} radius={8} align="flex-start" />
        </View>
      ) : (
        cards &&
        cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.value}>{card.value}</Text>
            <Text style={styles.info}>{card.info}</Text>
          </View>
        ))
      )}
    </View>
  );
};
