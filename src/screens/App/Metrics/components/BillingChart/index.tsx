import { Text, View } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";

import { theme } from "@styles/theme";

import { styles } from "./styles";
import { IBillingChartProps } from "./types";
import { Skeleton } from "@components/molecules";

export const BillingChart = ({ isLoading }: IBillingChartProps) => {
  const data = [
    {
      value: 2500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Jan",
    },

    {
      value: 3500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Feb",
    },

    {
      value: 4500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Mar",
    },


    {
      value: 5200,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Apr",
    },
  
    {
      value: 3000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "May",
    },
    {
      value: 4000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Jun",
    },

    {
      value: 5500,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Jul",
    },

    {
      value: 6000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Aug",
    },
  
    {
      value: 4800,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Sep",
    },

    {
      value: 5200,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Oct",
    },

    {
      value: 5800,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Nov",
    },

    {
      value: 6000,
      frontColor: "#006DFF",
      gradientColor: "#009FFF",
      label: "Dec",
    },
   
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faturamento</Text>
      <View style={{ flex: 1, alignItems: "center" }}>
        {isLoading ? (
          <Skeleton isFullWidth height={200} radius={8} align="flex-start" />
        ) : (
          <BarChart
            data={data}
            barWidth={16}
            // initialSpacing={10}
            // spacing={14}
            barBorderRadius={4}
            showGradient
            yAxisThickness={0}
            xAxisType={"dashed"}
            xAxisColor={"lightgray"}
            yAxisTextStyle={{ color: "lightgray" }}
            stepValue={1000}
            maxValue={10000}
            noOfSections={6}
            yAxisLabelTexts={["0k", "1k", "2k", "3k", "4k", "5k", "6k", "7k", "8k", "9k", "10k"]}
            labelWidth={40}
            xAxisLabelTextStyle={{
              color: "lightgray",
              textAlign: "center",
            }}
            showLine
            lineConfig={{
              color: "#F29C6E",
              thickness: 3,
              curved: true,
              hideDataPoints: true,
              shiftY: 20,
              // initialSpacing: -30,
            }}
          />
        )}
      </View>
    </View>
  );
};
