import styled from "styled-components";
import { theme } from "../../theme/index";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <ErrorPageStyled>
      <div className="content">
        <img src="/goku.png" alt="error" />
        <Link to="/" className="link">
          エラー Back to school
        </Link>
      </div>
    </ErrorPageStyled>
  );
}

const ErrorPageStyled = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: min-content;

    .link {
      margin-top: 10px;
      text-align: center;
      font-size: ${theme.fonts.P0};
      color: ${theme.colors.dark};
      text-decoration: underline;
    }
    img {
      width: 300px;
    }
  }
`;
