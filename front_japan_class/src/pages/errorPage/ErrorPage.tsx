import styled from "styled-components";
import { theme } from "../../theme/index";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <ErrorPageStyled>
      <img src="freezer.png" alt="" />
      <div className="message">
        <span>404エラー（Not Found）</span>
        <Link to="/">Go back to school</Link>
      </div>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`;
