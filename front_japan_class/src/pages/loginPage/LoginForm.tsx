import styled from "styled-components";
import { theme } from "../../theme/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusablesUi/Button";
import TextInput from "../../components/reusablesUi/TextInput";

export default function LoginForm() {
  const [pseudo, setPseudo] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pseudo) {
      navigate(`/class/${pseudo}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPseudo(e.target.value);
  };
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <TextInput
        value={pseudo}
        onChange={handleChange}
        placeholder={"your pseudo..."}
      />
      <Button label={"enter"} />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  gap: ${theme.spacing.xs};
  width: 100%;
`;
