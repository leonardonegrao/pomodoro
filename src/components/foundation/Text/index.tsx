import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type TextColor = 'primary.main' | 'gray.main' | 'white';
type TextVariant = 'appTitle' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'body1' | 'body2';
interface TextOptions {
  lineHeight?: string;
  fontWeight?: string;
  opacity?: number;
}

const TextColorMap = (color: TextColor) => css`
  color: ${({ theme }) => {
    if (color === 'primary.main') return theme.colors.primary.main;
    if (color === 'gray.main') return theme.colors.gray.main;

    return theme.colors.white;
  }};
`;

const resolveLetterSpacingMargin = (letterSpacing: string | undefined) => {
  if (!letterSpacing) return '0px';

  const [firstCharacter] = [...letterSpacing];
  
  if (firstCharacter === '-') {
    return '0px';
  }

  return `-${letterSpacing}`;
};

const TextVariantsMap = (variant: TextVariant) => css`
  font-family: ${({ theme }) => theme.typography.fonts[theme.activeTheme.fontFamily].fontFamily};

  font-size: ${({ theme: { typography } }) => typography.variants[variant].sm.fontSize};
  font-weight: ${({ theme: { typography } }) => typography.variants[variant].sm.fontWeight};
  line-height: ${({ theme: { typography } }) => typography.variants[variant].sm.lineHeight};

  ${({ theme: { typography } }) => typography.variants[variant].sm.letterSpacing && css`
    letter-spacing: ${typography.variants[variant].sm.letterSpacing};
    margin-right: ${resolveLetterSpacingMargin(typography.variants[variant].sm.letterSpacing)};
  `}
  ${({ theme: { typography } }) => typography.variants[variant].sm.textTransform && css`
    text-transform: ${typography.variants[variant].sm.textTransform};
  `}

  ${({ theme }) => theme.typography.variants[variant].md && css`
    @media (min-width: ${theme.breakpoints.md}) {
      ${theme.typography.variants[variant].md?.fontSize && css`
        font-size: ${theme.typography.variants[variant].md?.fontSize};
      `}
      ${theme.typography.variants[variant].md?.fontWeight && css`
        font-weight: ${theme.typography.variants[variant].md?.fontWeight};
      `}
      ${theme.typography.variants[variant].md?.lineHeight && css`
        line-height: ${theme.typography.variants[variant].md?.lineHeight};
      `}
      ${theme.typography.variants[variant].md?.letterSpacing && css`
        letter-spacing: ${theme.typography.variants[variant].md?.letterSpacing};
        margin-right: ${resolveLetterSpacingMargin(theme.typography.variants[variant].md?.letterSpacing)};
      `}
      ${theme.typography.variants[variant].md?.textTransform && css`
        text-transform: ${theme.typography.variants[variant].md?.textTransform};
      `}
    }
  `}
`;

const TextOptionsMap = (options: TextOptions) => css`
  ${() => options.lineHeight && css`line-height: ${options.lineHeight};`}
  ${() => options.fontWeight && css`font-weight: ${options.fontWeight};`}
  ${() => options.opacity && css`opacity: ${options.opacity};`}
`;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
  variant: TextVariant;
  color: TextColor;
  options?: TextOptions;
}

const BaseTypography = styled.span<TextProps>`
  ${({ color }) => TextColorMap(color)}
  ${({ variant }) => TextVariantsMap(variant)}
  ${({ options }) => options && TextOptionsMap(options)}
`;

export default function Text({
  as = 'span', variant = 'body1', color = 'white', children, ...props
}: TextProps): JSX.Element {
  return (
    <BaseTypography
      as={as}
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </BaseTypography>
  );
}
