import { Text, View } from "react-native";
import { styles } from "./styles";
import { IDailySummaryCardProps } from "./types";

export const DailySummaryCard = ({ cards }: IDailySummaryCardProps) => {
  return (
    <View style={styles.container}>
      {cards &&
        cards.map((card, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.value}>{card.value}</Text>
            <Text style={styles.info}>{card.info}</Text>
          </View>
        ))}
    </View>
  );
};
