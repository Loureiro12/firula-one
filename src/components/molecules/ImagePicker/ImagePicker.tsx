import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { ImagePickerProps } from './types';
import { theme } from 'src/styles/theme';

export const ImagePicker = ({
  label,
  placeholder = "Adicionar Imagem",
  overlayText = "Alterar Imagem",
  overlaySubtext = "Toque para escolher outra imagem",
  onImageSelect,
  imageUri,
  loading = false,
}: ImagePickerProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <TouchableOpacity
        onPress={onImageSelect}
        activeOpacity={0.8}
        disabled={loading}
      >
        {imageUri ? (
          <View style={styles.selectedImageContainer}>
            <Image
              source={{ uri: imageUri }}
              style={styles.selectedImage}
            />
            <View style={styles.imageOverlay}>
              <View style={styles.overlayContent}>
                <Ionicons 
                  name="camera" 
                  size={24} 
                  color={theme.colors.white} 
                />
                <Text style={styles.overlayText}>
                  {overlayText}
                </Text>
                <Text style={styles.overlaySubtext}>
                  {overlaySubtext}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.imagePlaceholder}>
            <View style={styles.imagePickerButton}>
              <Ionicons 
                name="camera-outline" 
                size={32} 
                color={theme.colors.neutral[400]}
                style={{ marginBottom: 8 }}
              />
              <Text style={styles.imagePickerText}>
                {placeholder}
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};