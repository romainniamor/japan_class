import styled from "styled-components";
import { theme } from "../../../theme/index";
import { dataResponseType } from "../../../typescript/types";
import Chunk from "./Chunk";
import { fadeIn } from "../../../animations/animation";
import IconButton from "../../../components/reusablesUi/IconButton";
import { useContext } from "react";
import MainContext from "../../../contexts/mainContext";

import { IoPlay, IoStop } from "react-icons/io5";

type dataProps = {
  data: dataResponseType;
  onClick: () => void;
};

export default function Board({ data, onClick }: dataProps) {
  const { audio, isPlaying, isMuted } = useContext(MainContext);

  return (
    <BoardStyled>
      {audio && (
        <div className="play-button">
          <IconButton
            icon={isPlaying ? <IoStop /> : <IoPlay />}
            onClick={onClick}
            disabled={isMuted}
          />
        </div>
      )}
      <div className="header">
        <span className="english">{data.english && data.english}</span>
        <span className="japanese">{data.japanese && data.japanese}</span>
        <hr />
      </div>

      <div className="chunks">
        {data.chunks &&
          data.chunks.map((chunk, index) => (
            <Chunk chunk={chunk} key={index}></Chunk>
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
  position: relative;
  .play-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: min-content;
    z-index: 2;
  }
  .header {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xxs};
    position: relative;
    .english {
      font-size: ${theme.fonts.P1};
      color: ${theme.colors.grayLight};
      font-weight: ${theme.weights.medium};
    }
    .japanese {
      font-size: ${theme.fonts.P2};
      color: ${theme.colors.white};
      letter-spacing: ${theme.spacing.xxs};
      font-weight: ${theme.weights.light};
      border-radius: ${theme.borderRadius.round};
      font-weight: ${theme.weights.semiBold};
    }
    hr {
      border: 1px solid ${theme.transparentBackground.extraLight};
      width: 100%;
    }
  }

  .chunks {
    display: flex;
    gap: ${theme.spacing.xs};
    flex-wrap: wrap;
    margin-top: 10px;
    max-height: 380px;
    overflow-y: scroll;
  }
`;
