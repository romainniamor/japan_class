import styled from "styled-components";
import { theme } from "../../theme/index";
import { FaArrowCircleDown } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { displayToast } from "../../utils/toast";
import { useState } from "react";
import Title from "./Title";
import MessageIcon from "../../components/reusablesUi/MessageIcon";
import Form from "../../components/reusablesUi/Form";
import { removeSpace } from "../../utils/removeSpace";
import StaticBackground from "../../components/reusablesUi/StaticBackground";

export default function LoginPage() {
  const [pseudo, setPseudo] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pseudo.length > 1) {
      navigate(`/class/${pseudo}`);
      return;
    }
    displayToast(
      "Oops! 🙈 It seems you forgot to enter your pseudo! ✌️ letters at least.  Try Again and hit enter! 🚀"
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPseudo(e.target.value);
  };

  return (
    <LoginPageStyled>
      <StaticBackground />
      <div className="content">
        <Title />
        <MessageIcon label={"log to access"} icon={<FaArrowCircleDown />} />
        <Form
          value={removeSpace(pseudo)}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder={"your pseudo..."}
          label={"enter"}
        />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  .content {
    z-index: 2;
    border: 1px solid ${theme.colors.gray};
    padding: 20px 30px 50px 30px;
    background-color: ${theme.transparentBackground.light};
    backdrop-filter: ${theme.blur.light};
    border-radius: ${theme.borderRadius.extraRound};
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: ${theme.spacing.s};
    box-shadow: ${theme.shadows.subtle};
    line-height: 1.6;
    font-weight: ${theme.weights.medium};
    color: ${theme.colors.white};
  }
`;
