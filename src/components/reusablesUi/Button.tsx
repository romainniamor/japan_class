import { styled, css } from "styled-components";
import { theme } from "../../theme/index";

type StyleTypes = {
  version?: "normal" | "success";
};

type ButtonProps = StyleTypes & {
  label: string;
  onClick?: () => void;
};

export default function Button({
  label,
  onClick,
  version = "normal",
}: ButtonProps) {
  return (
    <ButtonStyled onClick={onClick} version={version}>
      {label}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<StyleTypes>`
  border-radius: 5px;
  border: 1px solid transparent;
  color: ${theme.colors.white};
  padding: 8px 15px;
  cursor: pointer;
  text-transform: capitalize;
  ${(props) => props.version && extraStyle[props.version]}
`;

const extraStylePrimary = css`
  background-color: ${theme.transparentBackground.light};
  &:hover {
    background-color: ${theme.transparentBackground.medium};
  }

  &:active {
    background-color: ${theme.transparentBackground.light};
  }
`;

const extraStyleSuccess = css`
  background-color: ${theme.colors.green};
  &:hover {
    background-color: ${theme.colors.greenLight};
  }

  &:active {
    background-color: ${theme.colors.green};
  }
`;

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
};
