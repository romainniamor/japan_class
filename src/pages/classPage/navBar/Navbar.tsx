import styled from "styled-components";
import { theme } from "../../../theme/index";
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import IconButton from "../../../components/reusablesUi/IconButton";
import Profile from "./Profile";
import MainContext from "../../../contexts/mainContext";
import { useContext } from "react";
import { displayToast } from "../../../utils/toast";
import { IoMdVolumeOff } from "react-icons/io";
import { IoVolumeHigh } from "react-icons/io5";

export default function Navbar() {
  const { isMuted, setIsMuted } = useContext(MainContext);

  const toggleVolume = () => {
    if (isMuted === false) {
      setIsMuted(!isMuted);
      displayToast("V🤫lume is muted🤭!!!");
    }
    if (isMuted === true) {
      setIsMuted(!isMuted);
    }
  };

  return (
    <NavbarStyled>
      <Profile />
      <div className="icon-box">
        <IconButton
          icon={isMuted ? <IoMdVolumeOff /> : <IoVolumeHigh />}
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
