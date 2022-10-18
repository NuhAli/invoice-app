import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  min-height: 100%;
  max-width: 100%;
  border-radius: 8px;
  padding: 24px;
  margin: 0 24px;
  background-color: white;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const InvoiceDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #7e88c3;
  margin-top: 0;
`;

export const InvoiceAddress = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 31px;
`;

export const InvoiceAddressText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.229167px;
  color: #7e88c3;
`;

export const DetailsGrid = styled.div`
  max-width: 100%;
  min-height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  padding-bottom: 24px;
  margin-bottom: 60px;
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:last-child {
    justify-content: flex-start;
  }
`;

export const ColumnLong = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-column: 1 / span 2;
  margin-bottom: 40px;
`;

export const ColumnValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3125px;
  color: #0c0e16;
  margin: 0;
`;
