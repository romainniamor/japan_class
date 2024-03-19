import styled from "styled-components";

export default function StaticBackground() {
  return <StaticBackgroundStyled src="/japan_class.png" alt="japan_class" />;
}

const StaticBackgroundStyled = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
`;
