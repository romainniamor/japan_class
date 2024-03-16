import styled from "styled-components";

export default function TeacherIcon() {
  return (
    <TeacherIconStyled className="teacher">
      <img className="teacher-image" src="teacher.png" alt="teacher" />
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
  width: 60px;
  height: 60px;
  border: 1px solid white;
  box-shadow: 0 0 10px 0 wheat;

  .teacher-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
