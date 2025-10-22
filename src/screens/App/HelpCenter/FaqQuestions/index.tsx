import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import useFaqQuestions from "./hooks";
import { styles } from "./styles";

const FaqQuestionsScreen = () => {
  const { questions, loading, expandedId, toggle, handleGoBack, categoryName } =
    useFaqQuestions();

  return (
    <ContentPageTemplate
      isScrollable={false}
      headerProps={{
        title: categoryName || "Perguntas",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={styles.title}>Perguntas sobre {categoryName}</Text>
            <Text style={styles.subTitle}>
              Toque na pergunta para ver a resposta.
            </Text>
            <FlatList
              data={questions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <TouchableOpacity onPress={() => toggle(item.id)} activeOpacity={0.7}>
                    <View style={styles.headerItem}>
                                          <Text style={styles.question}>{item.question}</Text>
                    <Ionicons name={expandedId === item.id ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#000" />
                    </View>
                  </TouchableOpacity>
                  {expandedId === item.id && (
                    <Text style={styles.answer}>{item.answer}</Text>
                  )}
                </View>
              )}
            />
          </>
        )}
      </View>
    </ContentPageTemplate>
  );
};

export default FaqQuestionsScreen;
