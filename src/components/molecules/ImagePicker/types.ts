export interface ImagePickerProps {
  label?: string;
  placeholder?: string;
  overlayText?: string;
  overlaySubtext?: string;
  onImageSelect: () => void;
  imageUri?: string | null;
  loading?: boolean;
}