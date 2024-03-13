import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./Navbar";

export default function ClassPage() {
  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />
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

  /* .content {
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
  } */
`;
