import styled from "styled-components";
import TeacherIcon from "../../../components/reusablesUi/TeacherIcon";
import Button from "../../../components/reusablesUi/Button";

export default function TeacherBox() {
  return (
    <TeacherBoxStyled>
      <TeacherIcon />
      <Button
        label={"next - 次"}
        onClick={() => console.log("close")}
        version={"success"}
      />
    </TeacherBoxStyled>
  );
}

const TeacherBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
