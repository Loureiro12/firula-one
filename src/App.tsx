import * as React from "react";
import RootStack from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";

export function App() {
  const postHogApiKey = process.env.EXPO_PUBLIC_POST_HOG_KEY;
  return (
    <NavigationContainer>
      <PostHogProvider
        apiKey={postHogApiKey}
        options={{
          host: "https://us.i.posthog.com",
        }}
      >
        <RootStack />
      </PostHogProvider>
    </NavigationContainer>
  );
}
