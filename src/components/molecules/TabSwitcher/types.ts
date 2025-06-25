export interface ITabSwitcherProps {
  items: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
  selectedValue?: string;
}
