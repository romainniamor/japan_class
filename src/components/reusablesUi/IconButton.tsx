import styled from "styled-components";
import { theme } from "../../theme/index";
import { ReactNode } from "react";

type IconButtonProps = {
  onClick?: () => void;
  icon: ReactNode;
  disabled?: boolean;
};

export default function IconButton({
  icon,
  onClick,
  disabled,
}: IconButtonProps) {
  return (
    <IconButtonStyled onClick={onClick} disabled={disabled}>
      {icon}
    </IconButtonStyled>
  );
}

const IconButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  border-radius: ${theme.borderRadius.circle};
  padding: 5px;
  border: 1px solid transparent;
  background-color: ${theme.transparentBackground.light};
  cursor: pointer;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.P1};
  &:hover {
    background-color: ${theme.transparentBackground.medium};
  }
  &:active {
    background-color: ${theme.transparentBackground.light};
  }

  &:disabled {
    color: ${theme.colors.grayLight};
    cursor: auto;
    &:hover {
      background-color: ${theme.transparentBackground.light};
    }
  }
`;
