import styled from "styled-components";
import { theme } from "../../theme/index";
import { FaArrowCircleDown } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Title from "./Title";
import MessageIcon from "../../components/reusablesUi/MessageIcon";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <img className="bg" src="japan_class.png" alt="japan_class" />
      <div className="content">
        <Title />
        <MessageIcon label={"log to classroom"} icon={<FaArrowCircleDown />} />
        <LoginForm />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
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
`;
