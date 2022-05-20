import styled from "styled-components";

export const InfoSpan = styled.span`
  font-weight: 600;
`;

export const InfoText = styled.p`
  font: 14px;
  margin-left: 0.3em;
  font-weight: 300;
`;

export const InfoEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20px;
  margin: 5px 0;
`;

interface Props {
  text: string;
  value: string;
  leftMargin?: string;
}

function CardInfoEntry(props: Props) {
  return (
    <InfoEntry style={{ marginLeft: props.leftMargin }}>
      <InfoSpan>{props.text}</InfoSpan>
      <InfoText>{props.value}</InfoText>
    </InfoEntry>
  );
}

export default CardInfoEntry;
