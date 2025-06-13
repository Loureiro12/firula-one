import { PropsWithChildren, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { usePostHog } from "posthog-react-native";
import { theme } from "../../styles/theme";

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
    backgroundColor: theme.colors.primary[500],
    alignItems: "center",
    justifyContent: "center",
  },
});
