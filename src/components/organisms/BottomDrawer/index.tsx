import { Button } from "@components/atoms";
import React from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { BottomDrawerAction, BottomDrawerProps } from "./types";
import { styles } from "./styles";

export function BottomDrawer({ 
  isVisible, 
  onClose, 
  title, 
  description, 
  actions = [] 
}: BottomDrawerProps) {
  // Se não houver actions definidas, usa botões padrão
  const defaultActions: BottomDrawerAction[] = [
    {
      label: "Cancelar",
      onPress: onClose,
      variante: "secondary"
    },
    {
      label: "Ok, entendi",
      onPress: onClose,
      variante: "primary"
    }
  ];

  const buttonsToRender = actions.length > 0 ? actions : defaultActions;
  return (
    <Modal transparent visible={isVisible} animationType="slide">
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <View style={styles.handleContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.handle}
                />
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>
                  {title}
                </Text>
                <Text style={styles.description}>
                  {description}
                </Text>

                <View style={styles.actionsContainer}>
                  {buttonsToRender.map((action, index) => (
                    <Button 
                      key={index}
                      label={action.label}
                      onPress={action.onPress}
                      variante={action.variante || "primary"}
                      iconName={action.iconName}
                      isDisabled={action.isDisabled}
                      isLoading={action.isLoading}
                    />
                  ))}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
