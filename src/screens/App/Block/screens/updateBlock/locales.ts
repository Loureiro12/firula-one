export const locales = {
  form: {
    name: {
      label: "Nome da Quadra",
      placeholder: "Digite o nome da quadra",
      errorRequired: "Nome da quadra é obrigatório",
    },
    sports: {
      label: "Esportes Disponíveis",
      placeholder: "Selecione os esportes que podem ser praticados",
      errorRequired: "Selecione pelo menos um esporte",
    },
    courtType: {
      label: "Tipo de Quadra",
      placeholder: "Selecione o tipo de piso da quadra",
      errorRequired: "Tipo de quadra é obrigatório",
    },
    image: {
      label: "Foto da Quadra",
      placeholder: "Adicione uma foto da quadra (opcional)",
      buttonText: "Alterar Foto da Quadra",
    },
    isActive: {
      label: "Status da Quadra",
      description: "Quadra ativa estará disponível para reservas",
      activeLabel: "Ativa",
      inactiveLabel: "Inativa",
    },
  },
  buttons: {
    submit: "Salvar Alterações",
    submitting: "Salvando...",
    uploadingImage: "Enviando imagem...",
  },
  messages: {
    success: {
      title: "Sucesso!",
      description: "Quadra atualizada com sucesso!",
    },
    error: {
      title: "Erro",
      description: "Ocorreu um erro ao atualizar a quadra. Tente novamente.",
    },
    permissions: {
      gallery: {
        title: "Permissão necessária",
        description: "Precisamos de acesso à sua galeria de fotos para adicionar uma imagem da quadra.",
      },
    },
    noChanges: {
      title: "Nenhuma alteração",
      description: "Não há alterações para salvar.",
    },
    discardChanges: {
      title: "Descartar alterações?",
      description: "Você tem alterações não salvas. Tem certeza que deseja sair?",
      cancel: "Cancelar",
      discard: "Descartar",
    },
  },
  loading: {
    loadingBlock: "Carregando dados da quadra...",
  },
};