import styled from "styled-components";
import { theme } from "../../../theme/index";
import { chunkType } from "../../../typescript/types";

type chunkProps = {
  chunk: chunkType;
};

export default function Chunk({ chunk }: chunkProps) {
  return (
    <WordBoxStyled>
      <span>-{chunk.word}-</span>
      <span>{chunk.reading}</span>
      <span>[{chunk.phonetic}]</span>
      <span>{chunk.translation}</span>
      <span>{chunk.grammar}</span>
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
  span:nth-child(1) {
    color: ${theme.colors.grayLight};
    font-size: ${theme.fonts.s};
  }
  span:nth-child(2) {
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.semiBold};
  }
  span:nth-child(3) {
    font-size: ${theme.fonts.s};
    font-weight: ${theme.weights.medium};
    letter-spacing: ${theme.spacing.xxs};
  }
  span:nth-child(4) {
    font-size: ${theme.fonts.s};
    font-weight: ${theme.weights.medium};
  }
  span:nth-child(5) {
    color: ${theme.colors.slate};
    font-size: ${theme.fonts.s};
    font-weight: ${theme.weights.bold};
  }
`;
