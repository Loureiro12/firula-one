import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { IInteractiveTemplateProps } from "./types";

export const InteractiveTemplate = ({
  children,
  isScrollable,
  testIDPrefix,
}: IInteractiveTemplateProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS ? "padding" : "height"}
    >
      <SafeAreaView
        testID={`${testIDPrefix}-profile-template`}
        edges={["top", "bottom"]}
        style={styles.container}
      >
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
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
