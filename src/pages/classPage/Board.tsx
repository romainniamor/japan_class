import styled from "styled-components";
import { theme } from "../../theme/index";
import { responseType } from "../../typescript/types";

type ResponseProps = {
  sentence: responseType;
};

export default function Response({ sentence }: ResponseProps) {
  return (
    <BoardStyled>
      <span className="sentence">{sentence.sentence}</span>
      <span className="translation">{sentence.translation}</span>
    </BoardStyled>
  );
}

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  padding: 20px;
  background-color: ${theme.transparentBackground.extraLight};
  backdrop-filter: ${theme.blur.extraLight};
  border-radius: ${theme.borderRadius.round};
  text-align: left;

  span {
    font-size: ${theme.fonts.s};
    color: ${theme.colors.grayLight};
    font-weight: ${theme.weights.light};
  }
`;
