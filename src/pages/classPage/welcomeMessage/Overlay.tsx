import styled from "styled-components";
import { theme } from "../../../theme/index";
import TeacherBox from "./TeacherBox";
import OverlayText from "./OverlayText";
import { fadeIn } from "../../../animations/animation";

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
  animation: ${fadeIn} 0.3s ease-in-out;
  color: ${theme.colors.graySemiDark};
  box-shadow: ${theme.shadows.medium};
`;
