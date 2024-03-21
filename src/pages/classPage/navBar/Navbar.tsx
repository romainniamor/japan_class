import styled from "styled-components";
import { theme } from "../../../theme/index";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import IconButton from "../../../components/reusablesUi/IconButton";
import Profile from "./Profile";
import { useState } from "react";
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";
import MainContext from "../../../contexts/mainContext";
import { useContext } from "react";
import { displayToast } from "../../../utils/toast";

export default function Navbar() {
  const [isMuted, setIsMuted] = useState(false);

  const toggleVolume = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      displayToast("V🤫lume is muted🤭!!!");
    }
  };

  return (
    <NavbarStyled>
      <Profile />
      <div className="icon-box">
        <IconButton
          icon={isMuted ? <IoVolumeHigh /> : <IoMdVolumeOff />}
          onClick={toggleVolume}
        />
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
