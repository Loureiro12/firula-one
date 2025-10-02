export interface MultiSelectOption {
  id: string;
  label: string;
  value: string;
}

export interface IMultiSelect {
  label: string;
  options: MultiSelectOption[];
  selectedValues: string[];
  onSelectionChange: (selectedValues: string[]) => void;
  errorMessage?: string;
  placeholder?: string;
}