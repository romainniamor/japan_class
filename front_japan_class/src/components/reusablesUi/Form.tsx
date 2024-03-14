import styled from "styled-components";
import { theme } from "../../theme/index";
import Button from "./Button";
import TextInput from "./TextInput";

import "react-toastify/dist/ReactToastify.css";

export default function Form({
  value,
  onChange,
  placeholder,
  label,
  handleSubmit,
}) {
  return (
    <FormStyled onSubmit={handleSubmit}>
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
