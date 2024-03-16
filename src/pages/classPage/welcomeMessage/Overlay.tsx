import styled from "styled-components";
import { theme } from "../../../theme/index";
import TeacherBox from "./TeacherBox";
import OverlayText from "./OverlayText";

export default function Overlay() {
  return (
    <OverlayStyled>
      <OverlayText />
      <TeacherBox />
    </OverlayStyled>
  );
}

const OverlayStyled = styled.div`
  width: 450px;
  min-width: 380px;
  z-index: 10;
  background-color: white;
  display: flex;
  gap: 10px;
  padding: 20px 20px 30px 20px;
  align-items: center;
  border-radius: 10px;
  animation: fade-in 0.3s ease-in-out;
  color: ${theme.colors.graySemiDark};
  box-shadow: ${theme.shadows.medium};

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
