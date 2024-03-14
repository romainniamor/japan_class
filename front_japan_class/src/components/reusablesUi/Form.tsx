import styled from "styled-components";
import { theme } from "../../theme/index";
import Button from "./Button";
import TextInput from "./TextInput";

type FormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({
  value,
  onChange,
  placeholder,
  label,
  onSubmit,
}: FormProps) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <TextInput value={value} onChange={onChange} placeholder={placeholder} />
      <Button label={label} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  gap: ${theme.spacing.xs};
  width: 100%;
`;
