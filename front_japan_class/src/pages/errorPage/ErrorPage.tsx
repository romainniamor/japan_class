import styled from "styled-components";
import { theme } from "../../theme/index";

export default function ErrorPage() {
  return <ErrorPageStyled>ErrorPage</ErrorPageStyled>;
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
