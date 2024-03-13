import styled from "styled-components";
import { theme } from "../../theme/index";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  border-radius: 5px;
  border: 1px solid transparent;
  color: ${theme.colors.white};
  background-color: ${theme.transparentBackground.light};
  padding: 8px 15px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background-color: ${theme.transparentBackground.medium};
  }

  &:active {
    background-color: ${theme.transparentBackground.light};
  }
`;
