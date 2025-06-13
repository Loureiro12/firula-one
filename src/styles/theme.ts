import { colors } from "./tokens/colors";
import { typography } from "./tokens/typography";
import { spacing } from "./tokens/spacing";
import { radii } from "./tokens/radii";

export const theme = {
  colors,
  typography,
  spacing,
  radii,

  variants: {
    text: {
      heading: {
        fontSize: typography.fontSizes["3xl"],
        fontWeight: typography.fontWeights.bold,
        color: colors.neutral[900],
      },
      body: {
        fontSize: typography.fontSizes.base,
        fontWeight: typography.fontWeights.regular,
        color: colors.neutral[700],
      },
    },
  },
} as const;

export type Theme = typeof theme;
