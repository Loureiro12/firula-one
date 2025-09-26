import { useBottomDrawerStore } from '../store/bottomDrawerStore';
import { BottomDrawerAction } from '../components/organisms/BottomDrawer/types';

interface UseBottomDrawerReturn {
  showBottomDrawer: (config: {
    title: string;
    description: string;
    actions?: BottomDrawerAction[];
  }) => void;
  hideBottomDrawer: () => void;
  showConfirmDialog: (config: {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
  }) => void;
  showAlert: (config: {
    title: string;
    description: string;
    onClose?: () => void;
    buttonLabel?: string;
  }) => void;
}

export const useBottomDrawer = (): UseBottomDrawerReturn => {
  const { showBottomDrawer: showDrawer, hideBottomDrawer: hideDrawer } = useBottomDrawerStore();

  const showBottomDrawer = (config: {
    title: string;
    description: string;
    actions?: BottomDrawerAction[];
  }) => {
    showDrawer(config);
  };

  const hideBottomDrawer = () => {
    hideDrawer();
  };

  const showConfirmDialog = (config: {
    title: string;
    description: string;
    onConfirm: () => void;
    onCancel?: () => void;
    confirmLabel?: string;
    cancelLabel?: string;
  }) => {
    const actions: BottomDrawerAction[] = [
      {
        label: config.cancelLabel || "Cancelar",
        onPress: () => {
          config.onCancel?.();
          hideDrawer();
        },
        variante: "secondary"
      },
      {
        label: config.confirmLabel || "Confirmar",
        onPress: () => {
          config.onConfirm();
          hideDrawer();
        },
        variante: "primary"
      }
    ];

    showDrawer({
      title: config.title,
      description: config.description,
      actions
    });
  };

  const showAlert = (config: {
    title: string;
    description: string;
    onClose?: () => void;
    buttonLabel?: string;
  }) => {
    const actions: BottomDrawerAction[] = [
      {
        label: config.buttonLabel || "OK",
        onPress: () => {
          config.onClose?.();
          hideDrawer();
        },
        variante: "primary"
      }
    ];

    showDrawer({
      title: config.title,
      description: config.description,
      actions
    });
  };

  return {
    showBottomDrawer,
    hideBottomDrawer,
    showConfirmDialog,
    showAlert,
  };
};