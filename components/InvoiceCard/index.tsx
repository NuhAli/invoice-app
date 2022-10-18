import Link from "next/link";
import { currencyFormat } from "simple-currency-format";
import { InvoiceCardProps } from "../../types/invoiceCardProps";
import InvoiceStatus from "../InvoiceStatus";
import {
  Card,
  InvoiceAmount,
  InvoiceDate,
  InvoiceDetails,
  InvoiceNumber,
  InvoiceRecipent,
} from "./styles";

const InvoiceCard = ({ invoice }: InvoiceCardProps) => {
  return (
    <Link href={`/invoices/${encodeURIComponent(invoice.id)}`}>
      <Card>
        <InvoiceNumber>
          <span>#</span>
          {invoice.id}
        </InvoiceNumber>
        <InvoiceRecipent>{invoice.clientName}</InvoiceRecipent>
        <InvoiceDetails>
          <InvoiceDate>{`Due ${invoice.paymentDue}`}</InvoiceDate>
          <InvoiceAmount>{`${currencyFormat(
            invoice.total,
            "en-GB",
            "GBP",
            2
          )}`}</InvoiceAmount>
        </InvoiceDetails>
        <InvoiceStatus status={invoice.status} />
      </Card>
    </Link>
  );
};

export default InvoiceCard;
