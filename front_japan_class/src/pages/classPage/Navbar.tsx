import styled from "styled-components";
import { theme } from "../../theme/index";
import { Link, useParams } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import IconButton from "../../components/reusablesUi/IconButton";

import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";

export default function Navbar() {
  const { user } = useParams();
  return (
    <NavbarStyled>
      <span>Hi {user}</span>
      <div className="icon-box">
        <IoVolumeHigh />
        <IoMdVolumeOff />
        <Link to="/">
          <IconButton icon={<IoMdExit />} />
        </Link>
      </div>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  z-index: 2;
  width: 100%;
  background-color: ${theme.transparentBackground.light};
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  padding: 10px 20px;
  align-items: center;
  .icon-box {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.s};
  }
`;