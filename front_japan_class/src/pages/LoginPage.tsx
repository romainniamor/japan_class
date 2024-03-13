import styled from "styled-components";
import { theme } from "../theme/index";
import { FaArrowCircleDown } from "react-icons/fa";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <img className="bg" src="japan_class.png" alt="japan_class" />
      <div className="content">
        <h2>ようこそ</h2>
        <h1>japanese language school</h1>
        <hr />
        <div className="message">
          <span>Log to classroom</span>
          <FaArrowCircleDown />
        </div>

        <form action="">
          <input type="text" placeholder="Your Pseudo..." />
          <button>enter</button>
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
    background-color:  ${theme.transparentBackground.semiTransparent};
    backdrop-filter:${theme.blur.light};
    border-radius: ${theme.borderRadius.extraRound};
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: ${theme.spacing.s};
    box-shadow: ${theme.shadows.subtle};
    h1 {
      font-size: ${theme.fonts.P2};
      letter-spacing: 5px;
      text-transform: uppercase;
      font-weight: ${theme.weights.semiBold};
    }

    hr {
        width: 60%;
        border: 1px solid ${theme.transparentBackground.semiOpaque};
    }

    .message {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${theme.spacing.xxs};
        text-transforrm:

        }
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
            background-color: ${theme.colors.slateMedium}};
            /* color: ${theme.colors.grayLight}; */

            ::placeholder {
                color: ${theme.colors.gray};
            }

            :focus {
                outline: 1px solid ${theme.colors.grayLight};
            }


        }

        button {
            border-radius: 5px;
            border: 1px solid transparent;
            color: ${theme.colors.white};
            background-color: ${theme.transparentBackground.semiOpaque};
            padding: 8px 15px;
            cursor: pointer;
            text-transform: capitalize;

            &:hover {
            background-color: transparent;
            border: 1px solid ${theme.colors.grayLight};
            }

        }
    }

    )
  }
`;
