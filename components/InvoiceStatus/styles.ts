import styled from "styled-components";

export const Container = styled.div`
  width: 104px;
  height: 40px;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  grid-area: "invoice-status";
  justify-self: end;
  align-self: end;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const StatusIndicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
`;

export const StatusText = styled.p`
  margin-left: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-transform: capitalize;
`;