import { IoMdExit } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import styled from "styled-components";

export default function ClassPage() {
  const { user } = useParams();
  return (
    <ClassPageStyled>
      <h1>Page class de {user}</h1>
      <IoVolumeHigh />
      <IoMdVolumeOff />
      <Link to="/">
        <IoMdExit />
      </Link>
    </ClassPageStyled>
  );
}

const ClassPageStyled = styled.div`
  color: white;
  font-size: 2rem;
`;
