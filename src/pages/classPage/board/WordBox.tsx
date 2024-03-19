import styled from "styled-components";
import { theme } from "../../../theme/index";

type wordProps = {
  word: chunkType;
};

export default function WordBox({ word }: wordProps) {
  return (
    <WordBoxStyled>
      <span>{word.word}</span>
      <span>[{word.phonetic}]</span>
      <span>{word.translation}</span>
    </WordBoxStyled>
  );
}

const WordBoxStyled = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  font-size: ${theme.fonts.P0};
  gap: ${theme.spacing.xxs};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.transparentBackground.medium};
  width: max-content;
  color: ${theme.colors.white};
  span:nth-child(3) {
    color: ${theme.colors.slate};
    font-size: ${theme.fonts.s};
    font-weight: ${theme.weights.bold};
  }
`;
