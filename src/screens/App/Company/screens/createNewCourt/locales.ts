export const locales = {
  form: {
    name: {
      label: "Nome da Quadra",
      placeholder: "Digite o nome da quadra",
      errorRequired: "Nome da quadra é obrigatório",
    },
    valueForHour: {
      label: "Valor por Hora (R$)",
      placeholder: "Digite o valor por hora",
      errorRequired: "Valor por hora é obrigatório",
      errorPattern: "Digite um valor válido (ex: 50,00)",
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
      buttonText: "Adicionar Foto da Quadra",
    },
  },
  buttons: {
    submit: "Cadastrar Quadra",
    submitting: "Cadastrando...",
    uploadingImage: "Enviando imagem...",
  },
  messages: {
    success: {
      title: "Sucesso!",
      description: "Quadra cadastrada com sucesso!",
    },
    error: {
      title: "Erro",
      description: "Ocorreu um erro ao cadastrar a quadra. Tente novamente.",
    },
    permissions: {
      gallery: {
        title: "Permissão necessária",
        description: "Precisamos de acesso à sua galeria de fotos para adicionar uma imagem da quadra.",
      },
      camera: {
        title: "Permissão necessária",
        description: "Precisamos de acesso à sua câmera para tirar uma foto da quadra.",
      },
    },
    imageSelection: {
      title: "Selecionar Imagem",
      description: "Escolha uma opção:",
      gallery: "Galeria",
      camera: "Câmera",
      cancel: "Cancelar",
    },
  },
  flag: {
    title: "Cadastro de Quadra",
    topics: [
      "Adicione informações precisas sobre a quadra",
      "Selecione todos os esportes que podem ser praticados",
      "Escolha o tipo correto de piso",
      "Uma foto ajuda os usuários a conhecer melhor a quadra"
    ],
  },
};