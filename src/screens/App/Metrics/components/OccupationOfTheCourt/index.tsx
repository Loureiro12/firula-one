import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IOccupationOfTheCourtProps } from "./types";
import { Skeleton } from "@components/molecules";

export const OccupationOfTheCourt = ({
  isLoading,
}: IOccupationOfTheCourtProps) => {
  const data1 = [
    { value: 70 },
    { value: 46 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 80 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ocupação da Quadra</Text>
      <View style={{ flex: 1, alignItems: "center" }}>
        {isLoading ? (
        <Skeleton isFullWidth height={200} radius={8} align="flex-start" />
      ) : (
        <LineChart
          areaChart
          curved
          data={data1}
          hideDataPoints
          color1={theme.colors.primary[100]}
          startFillColor1={theme.colors.primary[200]}
          endFillColor1={theme.colors.primary[200]}
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={4}
          yAxisColor="white"
          yAxisThickness={0}
          yAxisTextStyle={{ color: "gray" }}
          yAxisLabelSuffix="%"
          xAxisColor="lightgray"
        />
      )}
      </View>
    </View>
  );
};
