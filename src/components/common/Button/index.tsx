import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary[theme.activeTheme.color]};
  color: ${({ theme }) => theme.colors.white};

  height: 53px;
  padding: 0 47px;
  border-radius: 26.5px;

  font-family: ${({ theme }) => theme.typography.fonts[theme.activeTheme.fontFamily].fontFamily};

  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.15);
    transform: translateY(-3px);
  }
`;

export default function Button({ children, type = 'button', ...rest }: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}