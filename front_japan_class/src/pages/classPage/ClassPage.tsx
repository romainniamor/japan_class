import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./Navbar";

export default function ClassPage() {
  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />
      <div className="menu">
        <form>
          <h3>How to say in Japanese?</h3>
          <span>
            Type a sentence you want to say in Japanese and i will translate it
            for you
          </span>
        </form>
      </div>
    </ClassPageStyled>
  );
}

const ClassPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .menu {
    flex: 1;
    z-index: 3;
    border: 3px solid blue;
    flex-direction: column;
    align-items: center;
  }
`;
