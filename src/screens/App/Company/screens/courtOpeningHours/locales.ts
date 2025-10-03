export const openingHoursLocales = {
  title: 'Horários de Funcionamento',
  subtitle: 'Configure os horários de funcionamento da quadra',
  
  // Navegação
  continue: 'Continuar',
  save: 'Salvar',
  cancel: 'Cancelar',
  back: 'Voltar',
  
  // Estados dos dias
  open: 'Aberto',
  closed: 'Fechado',
  
  // Dias da semana
  days: {
    sunday: 'Domingo',
    monday: 'Segunda-feira',
    tuesday: 'Terça-feira',
    wednesday: 'Quarta-feira',
    thursday: 'Quinta-feira',
    friday: 'Sexta-feira',
    saturday: 'Sábado',
  },
  
  daysShort: {
    sunday: 'Dom',
    monday: 'Seg',
    tuesday: 'Ter',
    wednesday: 'Qua',
    thursday: 'Qui',
    friday: 'Sex',
    saturday: 'Sáb',
  },
  
  // Horários
  timeSlot: {
    addTimeSlot: 'Adicionar horário',
    removeTimeSlot: 'Remover horário',
    startTime: 'Horário inicial',
    endTime: 'Horário final',
    price: 'Preço (R$)',
    dayUse: 'Day Use',
    dayUsePrice: 'Preço Day Use (R$)',
    dayUseDescription: 'Permitir uso durante todo o dia',
    selectStartTime: 'Selecionar horário inicial',
    selectEndTime: 'Selecionar horário final',
    hour: 'Hora',
    minute: 'Minuto',
  },
  
  // Estados vazios
  emptyStates: {
    noSchedules: 'Nenhum horário configurado',
    noSchedulesDescription: 'Adicione pelo menos um horário de funcionamento',
    allDaysClosed: 'Todos os dias estão fechados',
    allDaysClosedDescription: 'Configure pelo menos um dia de funcionamento',
  },
  
  // Estatísticas
  stats: {
    openDays: (count: number) => `${count} ${count === 1 ? 'dia aberto' : 'dias abertos'}`,
    totalSlots: (count: number) => `${count} ${count === 1 ? 'horário' : 'horários'} configurados`,
    complete: 'Configuração completa',
    incomplete: 'Configuração incompleta',
  },
  
  // Alertas e confirmações
  alerts: {
    removeTimeSlot: {
      title: 'Remover horário',
      message: 'Tem certeza que deseja remover este horário?',
      confirm: 'Remover',
      cancel: 'Cancelar',
    },
    
    unsavedChanges: {
      title: 'Alterações não salvas',
      message: 'Você tem alterações não salvas. Deseja sair mesmo assim?',
      confirm: 'Sair sem salvar',
      cancel: 'Continuar editando',
    },
    
    resetForm: {
      title: 'Resetar formulário',
      message: 'Isso irá remover todas as configurações. Tem certeza?',
      confirm: 'Resetar',
      cancel: 'Cancelar',
    },
  },
  
  // Validações
  validation: {
    required: 'Campo obrigatório',
    invalidTime: 'Horário inválido',
    invalidHour: 'Hora deve estar entre 00 e 23',
    invalidMinute: 'Minuto deve estar entre 00 e 59',
    invalidPrice: 'Preço deve ser maior que zero',
    invalidDayUsePrice: 'Preço do day use deve ser maior que zero',
    startTimeRequired: 'Horário inicial é obrigatório',
    endTimeRequired: 'Horário final é obrigatório',
    endTimeAfterStart: 'Horário final deve ser posterior ao inicial',
    overlappingTimes: 'Horários não podem se sobrepor',
    identicalTimes: 'Já existe um horário idêntico configurado',
    priceRequired: 'Preço é obrigatório',
    dayUsePriceRequired: 'Preço do day use é obrigatório',
    priceInvalid: 'Preço deve ser um número válido',
    minOneTimeSlot: 'Adicione pelo menos um horário de funcionamento',
    minOneOpenDay: 'Configure pelo menos um dia de funcionamento',
    timeFormat: 'Use o formato HH:MM (ex: 08:30)',
  },
  
  // Mensagens de sucesso
  success: {
    saved: 'Horários salvos com sucesso!',
    updated: 'Horários atualizados com sucesso!',
    created: 'Horários criados com sucesso!',
  },
  
  // Mensagens de erro
  errors: {
    loadFailed: 'Erro ao carregar horários',
    saveFailed: 'Erro ao salvar horários',
    updateFailed: 'Erro ao atualizar horários',
    deleteFailed: 'Erro ao excluir horário',
    genericError: 'Ocorreu um erro inesperado',
  },
  
  // Placeholders
  placeholders: {
    price: '0,00',
    selectTime: 'Selecionar',
  },
  
  // Botões de ação
  actions: {
    addHours: 'Adicionar horários',
    editHours: 'Editar horários',
    copyToOtherDays: 'Copiar para outros dias',
    applyToAll: 'Aplicar para todos os dias',
    clearAll: 'Limpar tudo',
    reset: 'Resetar',
  },
};