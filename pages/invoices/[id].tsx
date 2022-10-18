import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import styles from "../../styles/Home.module.css";
import { initalItems } from "../../data";
import { IInvoicePageProps } from "../../types/invoice";
import styled from "styled-components";
import Image from "next/image";
import InvoiceStatus from "../../components/InvoiceStatus";
import InvoiceDetails from "../../components/InvoiceDetails";
import InvoiceControl from "../../components/InvoiceControl";
import Link from "next/link";

export interface ContextType extends ParsedUrlQuery {
  id: string;
}
export const GoBackContainer = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
  margin: 0 24px 32px 24px;
`;

export const GoBackText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  vertical-align: middle;
  color: #0c0e16;
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 0;
`;
export const GoBackIcon = styled.div`
  position: relative;
  width: 8px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusBar = styled.div`
  max-width: 100%;
  height: auto;
  max-height: 91px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin: 0 24px 16px 24px;
`;

const StatusTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #858bb2;
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
`;

const Invoice = ({ currentInvoice }: IInvoicePageProps) => {
  return (
    currentInvoice && (
      <div className={styles.container}>
        <GoBackContainer>
          <GoBackIcon>
            <Image
              src={"/assets/icon-arrow-left.svg"}
              alt={"arrow left"}
              width={8}
              height={8}
              layout={"fixed"}
            />
          </GoBackIcon>
          <Link href={"/"}>
            <GoBackText>Go Back</GoBackText>
          </Link>
        </GoBackContainer>
        <StatusBar>
          <StatusTitle>Status</StatusTitle>
          <InvoiceStatus status={currentInvoice.status} />
        </StatusBar>
        <InvoiceDetails currentInvoice={currentInvoice} />
        <InvoiceControl />
      </div>
    )
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = initalItems.map((invoice) => {
    return { params: { id: invoice.id } };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as ContextType;
  const currentInvoice = initalItems.find((item) => id === item.id);
  return {
    props: { currentInvoice },
  };
};

export default Invoice;
