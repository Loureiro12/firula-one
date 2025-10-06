import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IBlock } from "../../../../../../api/types/blockService.types";
import { theme } from "../../../../../../styles/theme";
import { styles } from "./styles";

interface BlockCardProps {
  block: IBlock;
  typeBlockName: string;
  hasOpeningHours: boolean;
  onEdit: (blockId: string) => void;
  onConfigureHours: (companyBlockId: string) => void;
}

export const BlockCard: React.FC<BlockCardProps> = ({
  block,
  typeBlockName,
  hasOpeningHours,
  onEdit,
  onConfigureHours,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleConfigureHours = () => {
    if (!hasOpeningHours) {
      Alert.alert(
        "Configurar Horários",
        "Esta quadra ainda não possui horários de funcionamento configurados. Deseja configurar agora?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Configurar",
            onPress: () => onConfigureHours(block.id),
          },
        ]
      );
    } else {
      onConfigureHours(block.id);
    }
  };

  const renderImage = () => {
    if (!block.imageUrl || imageError) {
      return (
        <Image
          source={require("../../../../../../assets/imagem-background-not-found.png")}
          style={styles.image}
        />
      );
    }

    return (
      <Image
        source={{
          uri: `https://pub-ed847887b3d7415384bbf5488c674561.r2.dev/${block.imageUrl}`,
        }}
        style={styles.image}
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* Imagem da quadra */}
      <View style={styles.imageContainer}>
        {renderImage()}

        {/* Status da quadra */}
        <View
          style={[
            styles.statusBadge,
            block.isActive ? styles.statusActive : styles.statusInactive,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              block.isActive
                ? styles.statusTextActive
                : styles.statusTextInactive,
            ]}
          >
            {block.isActive ? "Ativa" : "Inativa"}
          </Text>
        </View>
      </View>

      {/* Conteúdo do card */}
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.blockName}>{block.name}</Text>
            <Text style={styles.blockType}>{typeBlockName}</Text>
          </View>

          {/* Botão de editar */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => onEdit(block.id)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name="create-outline"
              size={20}
              color={theme.colors.primary[100]}
            />
          </TouchableOpacity>
        </View>

        {/* Informações adicionais */}
        <View style={styles.infoContainer}>
          {block.sports && block.sports.length > 0 && (
            <View style={styles.infoItem}>
              <Ionicons
                name="basketball-outline"
                size={16}
                color={theme.colors.neutral[500]}
              />
              <Text style={styles.infoText}>{block.sports.join(", ")}</Text>
            </View>
          )}
        </View>

        {/* Alerta de horários não configurados */}
        {!hasOpeningHours && (
          <TouchableOpacity
            style={styles.warningAlert}
            onPress={handleConfigureHours}
          >
            <Ionicons
              name="warning"
              size={16}
              color={theme.colors.yellow[100]}
            />
            <Text style={styles.warningText}>Horários não configurados</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={theme.colors.yellow[100]}
            />
          </TouchableOpacity>
        )}

        {/* Botão de configurar horários - só aparece quando já tem horários configurados */}
        {hasOpeningHours && (
          <TouchableOpacity
            style={styles.configureButtonConfigured}
            onPress={handleConfigureHours}
          >
            <Ionicons name="time" size={16} color={theme.colors.green[100]} />
            <Text style={styles.configureButtonTextConfigured}>
              Editar Horários
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
