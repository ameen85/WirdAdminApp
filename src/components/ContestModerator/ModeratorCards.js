import styled from "@emotion/styled";
import { colors } from "styles";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoldText = styled.span`
  font-weight: 700;
  font-size: medium;
  @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  }
`;

export const LightText = styled.span`
  font-size: medium;
  color: ${colors.darkGrey};
  @media (max-width: 900px) {
    font-size: small;
  }
  @media (max-width: 550px) {
    font-size: smaller;
  }
`;

export const ModeratorSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ff5367;
`;

export const ParticipantsNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fbf9f7;
  padding: 24px;
  width: 100%;
  height: 106px;
  border-radius: 24px;
  max-width: 599px;

  @media (max-width: 900px) {
    max-width: inherit;
  }
`;

export const ShortedName = styled.div`
  background-color: #ff5367;
  color: ${colors.white};
  border-radius: 0.75rem;
  padding: 1.125rem;
  font-weight: 700;
  align-self: center;
`;

export const DeleteButton = styled.button`
  background-color: rgba(255, 83, 103, 0.12);
  color: #ff5367;
  border-radius: 1.125rem;
  padding: 0.875rem 1.125rem;
`;
