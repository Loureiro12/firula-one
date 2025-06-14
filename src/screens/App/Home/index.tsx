import { ContentPageTemplate } from "@components/templates/ContentPageTemplate";
import { Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <ContentPageTemplate
      isScrollable
      headerProps={{
        title: "Firula - One",
        rightIcon: "notifications-outline",
        rightIconOnPress: () => console.log("Settings Pressed"),
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          Home
        </Text>
      </View>
    </ContentPageTemplate>
  );
};
