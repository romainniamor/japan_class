import styled from "styled-components";
import { theme } from "../../theme/index";
import { ReactNode } from "react";

type MessageIconProps = {
  label: string;
  icon: ReactNode;
};

export default function MessageIcon({ label, icon }: MessageIconProps) {
  return (
    <MessageIconStyled>
      <span>{label}</span>
      {icon}
    </MessageIconStyled>
  );
}

const MessageIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxs};
  text-transform: uppercase;
  letter-spacing: ${theme.spacing.xxs};
`;
