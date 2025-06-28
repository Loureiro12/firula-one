import React, { useEffect, useState } from "react";
import { PostHogProvider } from "posthog-react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthRootStack from "./auth.routes";
import AppRootStack from "./app.routes";
import { useAuthStore } from "src/store/authStore";
import { Text, View } from "react-native";

export default function RootStack() {
  const postHogApiKey = process.env.EXPO_PUBLIC_POST_HOG_KEY;

  const [isLoading, setIsLoading] = useState(true);
  const { token, initialize } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      await initialize();
      setIsLoading(false);
    };
    initAuth();
  }, [initialize]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <PostHogProvider
        apiKey={postHogApiKey}
        options={{
          host: "https://us.i.posthog.com",
        }}
      >
        {!token ? <AuthRootStack /> : <AppRootStack />}
      </PostHogProvider>
    </NavigationContainer>
  );
}
