import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function OverlayText() {
  return (
    <OverlayTextStyled>
      <span>こんにちは 😺(hello - Konnichiwa )</span>
      <span>My name is Bulma (ブルマ).</span>
      <span>I'm your japanese seinsei😄.</span>
      <span>
        Just type your request in english󠁧󠁢󠁥, and I'll provide you the
        Japanese🇯🇵 translation.
      </span>
    </OverlayTextStyled>
  );
}

const OverlayTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  font-size: ${theme.fonts.s};

  span {
    font-size: 1.2em;
    color: ${theme.colors.graySemiDark};
    line-height: 1.3;
  }
`;
