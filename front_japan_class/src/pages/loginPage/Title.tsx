import styled from "styled-components";
import { theme } from "../../theme/index";

export default function Title() {
  return (
    <TitleStyled>
      <h2>ようこそ</h2>
      <h1>japanese language school</h1>
      <hr />
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  margin-bottom: ${theme.spacing.md};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.s};

  h1 {
    font-size: ${theme.fonts.P2};
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: ${theme.weights.semiBold};
  }

  hr {
    width: 60%;
    border: 1px solid ${theme.transparentBackground.semiOpaque};
  }
`;
