export interface SingleSelectOption {
  id: string;
  label: string;
  value: string;
}

export interface ISingleSelect {
  label: string;
  options: SingleSelectOption[];
  selectedValue: string | null;
  onSelectionChange: (selectedValue: string) => void;
  errorMessage?: string;
  placeholder?: string;
}