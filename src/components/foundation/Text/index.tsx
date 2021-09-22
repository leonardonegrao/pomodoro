import styled, { css } from 'styled-components';

type TextVariant = 'appTitle' | 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'body1' | 'body2';

export const TextVariantsMap = (variant: TextVariant) => css`
  font-size: ${({ theme }) => theme.typography.variants[variant].fontSize};
  font-weight: ${({ theme }) => theme.typography.variants[variant].fontWeight};
  line-height: ${({ theme }) => theme.typography.variants[variant].lineHeight};

  ${({ theme }) => {
    if (theme.typography.variants[variant].letterSpacing) {
      return css`
        letter-spacing: ${theme.typography.variants[variant].letterSpacing};
    `;
    }

    if (theme.typography.variants[variant].textTransform) {
      return css`
        text-transform: ${theme.typography.variants[variant].textTransform};
    `;
    }

    return css``;
  }}
`;

interface BaseTypographyProps {
  variant: TextVariant
  as?: React.ElementType
}

const BaseTypography = styled.span<BaseTypographyProps>`
  ${({ variant }) => TextVariantsMap(variant)}
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  tag?: React.ElementType;
  variant: TextVariant;
  children: React.ReactNode;
  color: string;
}

export default function Text({
  tag = 'span', color, variant, children, ...props
}: TextProps) {
  return (
    <BaseTypography
      as={tag}
      color={color}
      variant={variant}
      {...props}
    >
      {children}
    </BaseTypography>
  );
}
