import { Text, View } from "react-native";
import { styles } from "./styles";
import { ICardStatisticProps } from "./types";

export const CardStatistic = ({ label, value }: ICardStatisticProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
