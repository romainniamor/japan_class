import styled from "styled-components";
import { theme } from "../../../theme/index";
import { dataTranslatedType } from "../../../typescript/types";
import WordBox from "./WordBox";
import { fadeIn } from "../../../animations/animation";

type dataProps = {
  data: dataTranslatedType;
};

export default function Board({ data }: dataProps) {
  return (
    <BoardStyled>
      <span className="sentence">{data.english}</span>
      <span className="translation">{data.japanese_translation}</span>
      <hr />
      <div className="words">
        {data.japanese.map((element, index) => (
          <WordBox word={element} key={index}></WordBox>
        ))}
      </div>
    </BoardStyled>
  );
}

const BoardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxs};
  border: 1px solid ${theme.colors.gray};
  padding: 20px 20px 40px 20px;
  background-color: ${theme.transparentBackground.light};
  backdrop-filter: ${theme.blur.light};
  border-radius: ${theme.borderRadius.extraRound};
  text-align: left;
  text-transform: capitalize;
  animation: ${fadeIn} 0.3s ease-in-out;

  .sentence {
    font-size: ${theme.fonts.P1};
    color: ${theme.colors.grayLight};
    font-weight: ${theme.weights.medium};
  }
  .translation {
    font-size: ${theme.fonts.P3};
    color: ${theme.colors.white};
    letter-spacing: ${theme.spacing.xxs};
    font-weight: ${theme.weights.light};

    border-radius: ${theme.borderRadius.round};
  }

  hr {
    border: 1px solid ${theme.transparentBackground.extraLight};
    width: 100%;
  }

  .words {
    display: flex;
    gap: ${theme.spacing.xs};
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;