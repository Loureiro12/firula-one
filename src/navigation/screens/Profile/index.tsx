import { PropsWithChildren, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { usePostHog } from "posthog-react-native";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

export default function ProfileScreen() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Profile Screenn", { foo: "bar" });
  }, []);
  
  return (
    <View style={styles.container}>
      <CustomText>Welcome!</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
