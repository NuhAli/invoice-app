import React from "react";
import {
  Container,
  BreakdownSection,
  BreakdownRow,
  BreakdownItem,
  ItemTotal,
  ItemTotalText,
  GrandTotal,
  GrandTotalTitle,
  GrandTotalPrice,
} from "./styles";

const InvoiceBreakdown = () => {
  return (
    <Container>
      <BreakdownSection>
        <BreakdownRow>
          <BreakdownItem>
            <h3>Banner Design</h3>
            <p>1 x 156.00</p>
          </BreakdownItem>
          <ItemTotal>
            <ItemTotalText>£156.00</ItemTotalText>
          </ItemTotal>
        </BreakdownRow>
        <BreakdownRow>
          <BreakdownItem>
            <h3>Banner Design</h3>
            <p>1 x 156.00</p>
          </BreakdownItem>
          <ItemTotal>
            <ItemTotalText>£156.00</ItemTotalText>
          </ItemTotal>
        </BreakdownRow>
      </BreakdownSection>
      <GrandTotal>
        <GrandTotalTitle>Grand Total</GrandTotalTitle>
        <GrandTotalPrice>£556.00</GrandTotalPrice>
      </GrandTotal>
    </Container>
  );
};

export default InvoiceBreakdown;
