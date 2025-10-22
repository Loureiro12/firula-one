import React from "react";

import { Ionicons } from "@expo/vector-icons";

import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";

import { useMainHelpCenter } from "./hooks";
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";

export const MainHelpCenterScreen = () => {
  const { handleGoBack, categories, loading, handleSelectCategory } = useMainHelpCenter();

  return (
    <ContentPageTemplate
      isScrollable={false}
      headerProps={{
        title: "Central de Ajuda",
        onArrowBackPress: handleGoBack,
      }}
    >
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
          <Text style={styles.title}>Dúvidas frequentes</Text>
          <Text style={styles.subTitle}>Selecione uma categoria para ver as perguntas frequentes.</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handleSelectCategory(item)} activeOpacity={0.7}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>
            )}
          />
          </>
        )}
      </View>
    </ContentPageTemplate>
  );
};
