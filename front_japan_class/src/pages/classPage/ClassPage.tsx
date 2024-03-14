import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./Navbar";
import Form from "../../components/reusablesUi/Form";

export default function ClassPage() {
  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />
      <div className="main-content">
        <div className="course-col">
          <div className="sentence-input-box">
            <h4>How to say in Japanese?</h4>
            <span>
              Type a sentence you want to say in Japanese and i will translate
              it for you.
            </span>
            <Form
              placeholder={"Type your sentence..."}
              label={"ask"}
              onSubmit={() => {}}
              onChange={() => {}}
              value={""}
            />
          </div>
        </div>
      </div>
    </ClassPageStyled>
  );
}

const ClassPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .main-content {
    flex: 1;
    z-index: 3;
    border: 3px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .course-col {
      width: 450px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px 0;

      .sentence-input-box {
        border: 1px solid ${theme.colors.gray};
        padding: 20px 30px 50px 30px;
        background-color: ${theme.transparentBackground.light};
        backdrop-filter: ${theme.blur.light};
        border-radius: ${theme.borderRadius.extraRound};
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: ${theme.spacing.xxs};
        box-shadow: ${theme.shadows.subtle};
        line-height: 1.6;

        width: 100%;

        h4 {
          font-size: ${theme.fonts.P0};
          color: ${theme.colors.white};
          font-weight: ${theme.weights.medium};
        }

        span {
          font-size: ${theme.fonts.s};
          color: ${theme.colors.grayLight};
          font-weight: ${theme.weights.light};
        }
      }
    }
  }
`;
