import React from "react";
import { Text, TextProps } from "react-native";
import { formatCNPJ, formatPhone } from "src/utils/masks";

type MaskType = "cnpj" | "phone" | "none";

interface MaskedTextProps extends TextProps {
  value?: string | null;
  type?: MaskType;
  formatter?: (val?: string | null) => string;
}

export const MaskedText: React.FC<MaskedTextProps> = ({
  value,
  type = "none",
  formatter,
  children,
  ...rest
}) => {
  const formatted = formatter
    ? formatter(value)
    : type === "cnpj"
    ? formatCNPJ(value)
    : type === "phone"
    ? formatPhone(value)
    : value || "";

  return (
    <Text {...rest}>{formatted || (typeof children === "string" ? children : null)}</Text>
  );
};

export default MaskedText;
