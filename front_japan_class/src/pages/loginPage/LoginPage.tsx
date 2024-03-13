import styled from "styled-components";
import { theme } from "../../theme/index";
import { FaArrowCircleDown } from "react-icons/fa";
import Title from "./Title";
import MessageIcon from "../../components/reusablesUi/MessageIcon";
import Button from "../../components/reusablesUi/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
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
    <LoginPageStyled>
      <img className="bg" src="japan_class.png" alt="japan_class" />
      <div className="content">
        <Title />
        <MessageIcon label={"log to classroom"} icon={<FaArrowCircleDown />} />
        <form onSubmit={handleSubmit}>
          <input
            value={pseudo}
            onChange={handleChange}
            type="text"
            placeholder="Your Pseudo..."
          />
          <Button label={"enter"} />
        </form>
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

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

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
  }

  form {
    display: flex;
    gap: ${theme.spacing.xs};
    width: 100%;
    input {
      color: ${theme.colors.grayLight};
      flex: 1;
      padding: 8px 15px;
      border-radius: 5px;
      border: 1px solid transparent;
      background-color: ${theme.colors.slateMedium};
    }
    ::placeholder {
      color: ${theme.colors.gray};
    }
    :focus {
      outline: 1px solid ${theme.colors.grayLight};
    }
  }
`;
