import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";

export default function Profile() {
  const { user } = useParams();
  return (
    <ProfileStyled>
      <span className="label">hey,</span>
      <span className="username">{user}</span>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xxs};

  /* color: ${theme.colors.white}; */
  .label {
    color: ${theme.colors.green};
    font-weight: ${theme.weights.bold};
    text-transform: capitalize;
  }
  .username {
    color: ${theme.colors.white};
    text-overflow: ellipsis;
    max-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-transform: capitalize;
  }
`;
