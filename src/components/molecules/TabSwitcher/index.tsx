import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ITabSwitcherProps } from "./types";
import { theme } from "@styles/theme";

export const TabSwitcher = ({
  items,
  onChange,
  selectedValue,
}: ITabSwitcherProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {items &&
          items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onChange && onChange(item.value)}
              style={[
                styles.tab,
                {
                  backgroundColor:
                    selectedValue === item.value
                      ? theme.colors.white
                      : theme.colors.neutral[10],
                  shadowColor:
                    selectedValue === item.value
                      ? theme.colors.black
                      : "transparent",
                },
              ]}
              activeOpacity={0.7}
            >
              <Text style={[styles.label, {
                color:
                  selectedValue === item.value
                    ? theme.colors.primary[100]
                    : theme.colors.gray.gray05,
                fontWeight:
                  selectedValue === item.value ? "bold" : "normal",
              }]}>{item.label}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};
