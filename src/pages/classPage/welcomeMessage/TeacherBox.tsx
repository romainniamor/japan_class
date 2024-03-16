import styled from "styled-components";
import TeacherIcon from "../../../components/reusablesUi/TeacherIcon";
import Button from "../../../components/reusablesUi/Button";
import { useContext } from "react";
import MainContext from "../../../contexts/mainContext";

export default function TeacherBox() {
  const { setIsVisible } = useContext(MainContext);

  const handleClose = () => {
    setIsVisible(true);
  };
  return (
    <TeacherBoxStyled>
      <TeacherIcon />
      <Button label={"next - 次"} onClick={handleClose} version={"success"} />
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
