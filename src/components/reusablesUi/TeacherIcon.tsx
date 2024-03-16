import styled from "styled-components";
import { theme } from "../../theme";

export default function TeacherIcon() {
  return (
    <TeacherIconStyled className="teacher">
      <img className="teacher-image" src="/teacher.png" alt="teacher" />
    </TeacherIconStyled>
  );
}

const TeacherIconStyled = styled.div`
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid white;
  box-shadow: ${theme.shadows.subtle};

  .teacher-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
