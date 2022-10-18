import styled from "styled-components";

export const Container = styled.div`
  height: 228px;
  max-width: 100%;
  border-radius: 8px 8px 0px 0px;
  grid-column: 1 / span 2;
`;

export const BreakdownSection = styled.div`
  background: #f9fafe;
  height: auto;
  max-width: 100%;
  padding: 24px;
  border-radius: 8px 8px 0px 0px;
`;

export const BreakdownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BreakdownRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-bottom: 24px;
  h3 {
    color: #0c0e16;
  }
  p {
    color: #7e88c3;
    margin-top: 0;
    margin-bottom: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTotal = styled.div`
  height: 100%;
  justify-self: center;
  align-self: center;
`;

export const ItemTotalText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: -0.25px;
  color: #0c0e16;
  margin-bottom: 0;
`;

export const GrandTotal = styled.div`
  max-width: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  background: #373b53;
  border-radius: 0px 0px 8px 8px;
`;

export const GrandTotalTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: #ffffff;
  align-self: center;
  margin: 0;
`;
export const GrandTotalPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: right;
  letter-spacing: -0.416667px;
  color: #ffffff;
`;
