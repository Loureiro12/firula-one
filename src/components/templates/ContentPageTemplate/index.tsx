import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { IContentPageTemplateProps } from "./types";
import { Header } from "@components/atoms/Header";

export const ContentPageTemplate = ({
  children,
  isScrollable,
  testIDPrefix,
  headerProps,
}: IContentPageTemplateProps) => {
  return (
    <>
      {headerProps && <Header {...headerProps} />}
      <View style={styles.contentContainer}>
        {isScrollable ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>{children}</View>
          </ScrollView>
        ) : (
          <View style={styles.content}>
            <View style={styles.fixedContent}>{children}</View>
          </View>
        )}
      </View>
    </>
  );
};
