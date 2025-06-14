import { PropsWithChildren, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { usePostHog } from "posthog-react-native";
import { Button, Input } from "@components/atoms";
import { theme } from "@styles/theme";
import { InteractiveTemplate } from "@components/templates/InteractiveTemplate";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text>{children}</Text>
);

export default function ProfileScreen() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("Profile Screenn", { foo: "bar" });
  }, []);

  return (
    <InteractiveTemplate>
      <View style={styles.container}>
        <CustomText>Welcome!</CustomText>
        <Input
          label="Email"
          errorMensage="Please enter a valid email address"
          iconLeft="mail-outline"
          iconRight="checkmark-circle-outline"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="done"
          clearButtonMode="while-editing"
        />
        <Button label="Entrar" onPress={() => console.log("Press")} />
      </View>
    </InteractiveTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral["100"],
    alignItems: "center",
    justifyContent: "center",
  },
});
