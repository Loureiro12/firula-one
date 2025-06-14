import React from "react";
import { PostHogProvider } from "posthog-react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthRootStack from "./auth.routes";
import AppRootStack from "./app.routes";

export default function RootStack() {
  const postHogApiKey = process.env.EXPO_PUBLIC_POST_HOG_KEY;

  return (
    <NavigationContainer>
      <PostHogProvider
        apiKey={postHogApiKey}
        options={{
          host: "https://us.i.posthog.com",
        }}
      >
        {/* <AuthRootStack /> */}
        <AppRootStack />
      </PostHogProvider>
    </NavigationContainer>
  );
}
