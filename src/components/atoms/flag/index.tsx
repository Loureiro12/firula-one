import { Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { theme } from "@styles/theme";
import { IFlag } from "./types";

export const Flag = ({ title, label, topics }: IFlag) => {
  return (
    <View style={styles.container}>
      <Ionicons name="flag" size={20} color={theme.colors.white} />
      <View style={styles.contentContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {label && <Text style={styles.label}>{label}</Text>}
        {topics && topics.length > 0 && (
          <View style={styles.topicsContainer}>
            {topics.map((topic, index) => (
              <View key={index} style={styles.topicRow}>
                <Text style={styles.topicBullet}>•</Text>
                <Text style={styles.topicText}>{topic}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};
