import styled from "styled-components";

export const Card = styled.div`
width: 327px;
height: 134px;
background-color: white;
border-radius: 10px;
padding: 24px;
display: grid;
grid-template-areas:
  "invoice-number  invoice-recipient"
  "invoice-details invoice-status";
margin-bottom: 1rem;
`;

export const InvoiceNumber = styled.h2`
color: #0c0e16;
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
letter-spacing: -0.25px;
grid-area: "invoice-number";
span {
  color: #7e88c3;
}
`;

export const InvoiceRecipent = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: right;
letter-spacing: -0.25px;
color: #858bb2;
grid-area: "invoice-recipient";
`;

export const InvoiceDate = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: right;
letter-spacing: -0.25px;
color: #858bb2;
margin-top: 0;
`;

export const InvoiceAmount = styled.p`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.8px;
color: #0c0e16;
margin: 0;
`;

export const InvoiceDetails = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
grid-area: "invoice-details";
`;
