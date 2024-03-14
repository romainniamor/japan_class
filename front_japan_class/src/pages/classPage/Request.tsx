import styled from "styled-components";
import { theme } from "../../theme/index";

type RequestProps = {
  children: JSX.Element;
};

export default function Request({ children }: RequestProps) {
  return (
    <RequestStyled>
      <h4 className="title">How to say in Japanese?</h4>
      <span className="text">
        Type a sentence you want to say in Japanese and i will translate it for
        you.
      </span>
      {children}
    </RequestStyled>
  );
}

const RequestStyled = styled.div`
  border: 1px solid ${theme.colors.gray};
  padding: 20px;
  background-color: ${theme.transparentBackground.light};
  backdrop-filter: ${theme.blur.light};
  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: ${theme.spacing.xxs};
  box-shadow: ${theme.shadows.subtle};
  line-height: 1.6;
  width: 100%;

  .title {
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.white};
    font-weight: ${theme.weights.medium};
  }

  .text {
    font-size: ${theme.fonts.s};
    color: ${theme.colors.grayLight};
    font-weight: ${theme.weights.light};
  }
`;
