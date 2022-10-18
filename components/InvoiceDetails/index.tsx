import React from "react";
import styled from "styled-components";
import { IInvoicePageProps } from "../../types/invoice";
import InvoiceBreakdown from "../InvoiceBreakdown";
import { InvoiceNumber } from "../InvoiceCard/styles";
import { Section, InvoiceDescription, InvoiceAddress, InvoiceAddressText, DetailsGrid, Column, ColumnValue, ColumnLong } from "./styles";


const InvoiceDetails = ({ currentInvoice }: IInvoicePageProps) => {
  return (
    <Section>
      <InvoiceNumber>
        <span>#</span>
        {currentInvoice.id}
      </InvoiceNumber>
      <InvoiceDescription>{currentInvoice.description}</InvoiceDescription>
      <InvoiceAddress>
        <InvoiceAddressText>
          {currentInvoice.senderAddress.street}
        </InvoiceAddressText>
        <InvoiceAddressText>
          {currentInvoice.senderAddress.city}
        </InvoiceAddressText>
        <InvoiceAddressText>
          {currentInvoice.senderAddress.postCode}
        </InvoiceAddressText>
        <InvoiceAddressText>
          {currentInvoice.senderAddress.country}
        </InvoiceAddressText>
      </InvoiceAddress>
      <DetailsGrid>
        <Column>
          <InvoiceDescription>Invoice Date</InvoiceDescription>
          <ColumnValue>{currentInvoice.paymentDue}</ColumnValue>
        </Column>
        <Column>
          <InvoiceDescription>Bill To</InvoiceDescription>
          <ColumnValue>{currentInvoice.clientName}</ColumnValue>
        </Column>
        <Column>
          <InvoiceDescription>Payment Due</InvoiceDescription>
          <ColumnValue>{currentInvoice.clientName}</ColumnValue>
        </Column>
        <Column>
          <InvoiceAddress>
            <InvoiceAddressText>
              {currentInvoice.clientAddress.street}
            </InvoiceAddressText>
            <InvoiceAddressText>
              {currentInvoice.clientAddress.city}
            </InvoiceAddressText>
            <InvoiceAddressText>
              {currentInvoice.clientAddress.postCode}
            </InvoiceAddressText>
            <InvoiceAddressText>
              {currentInvoice.clientAddress.country}
            </InvoiceAddressText>
          </InvoiceAddress>
        </Column>
        <ColumnLong>
          <InvoiceDescription>Sent To</InvoiceDescription>
          <ColumnValue>{currentInvoice.clientEmail}</ColumnValue>
        </ColumnLong>
        <InvoiceBreakdown />
      </DetailsGrid>
    </Section>
  );
};

export default InvoiceDetails;
