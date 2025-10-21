export const unmask = (value?: string | null): string => {
  if (!value) return "";
  return value.replace(/\D/g, "");
};

export const formatCNPJ = (value?: string | null): string => {
  const digits = unmask(value);
  if (!digits) return "";

  const part1 = digits.substring(0, 2);
  const part2 = digits.substring(2, 5);
  const part3 = digits.substring(5, 8);
  const part4 = digits.substring(8, 12);
  const part5 = digits.substring(12, 14);

  let formatted = part1;
  if (part2) formatted += `.${part2}`;
  if (part3) formatted += `.${part3}`;
  if (part4) formatted += `/${part4}`;
  if (part5) formatted += `-${part5}`;

  return formatted;
};

export const formatPhone = (value?: string | null): string => {
  const digits = unmask(value);
  if (!digits) return "";

  // DDD + number
  const ddd = digits.substring(0, 2);
  const rest = digits.substring(2);

  if (rest.length <= 8) {
    // formato (00) 0000-0000
    const part1 = rest.substring(0, 4);
    const part2 = rest.substring(4, 8);
    return `(${ddd}) ${part1}${part2 ? `-${part2}` : ""}`;
  }

  // formato (00) 00000-0000 (para celular 9 dígitos)
  const part1 = rest.substring(0, 5);
  const part2 = rest.substring(5, 9);
  return `(${ddd}) ${part1}${part2 ? `-${part2}` : ""}`;
};

export default {
  unmask,
  formatCNPJ,
  formatPhone,
};
