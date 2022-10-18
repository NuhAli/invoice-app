import React from "react";
import { Container, EditButton, DeleteButton, PaidButton } from "./styles";


const InvoiceControl = () => {
  return (
    <Container>
      <EditButton>Edit</EditButton>
      <DeleteButton>Delete</DeleteButton>
      <PaidButton>Mark as Paid</PaidButton>
    </Container>
  );
};

export default InvoiceControl;
