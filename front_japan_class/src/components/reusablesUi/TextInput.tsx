import styled from "styled-components";
import { theme } from "../../theme/index";

type TextInputProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  value,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <TextInputStyled
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    ></TextInputStyled>
  );
}

const TextInputStyled = styled.input`
  color: ${theme.colors.grayLight};
  flex: 1;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: ${theme.colors.slateMedium};

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;
