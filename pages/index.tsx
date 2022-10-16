import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { TaskBar } from "../components/TaskBar";
import InvoiceCard from "../components/InvoiceCard";
import styled from "styled-components";
import { initalItems } from "../data";
import Image from "next/image";

const InvoiceArea = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0;
`;

const IconDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
`;

const DescriptionTitle = styled.p`
  margin: 40px auto 24px auto;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;
  color: #0c0e16;
`;

const Description = styled.p`
  width: 180px;
  margin: 0;
  color: #888eb0;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;

  span {
    font-weight: 900;
  }
`;

const Home: NextPage = () => {
  const renderInvoices = () => {
    if (initalItems.length > 0) {
      return initalItems.map((item) => {
        return <InvoiceCard key={item.id} invoice={item} />;
      });
    } else {
      return (
        <>
          <Image
            src={"/assets/illustration-empty.svg"}
            alt="icon-empty"
            width={194}
            height={160}
          />
          <IconDescription>
            <DescriptionTitle>There is nothing here</DescriptionTitle>
            <Description>
              Create an invoice by clicking the <span>New</span> button and get
              started
            </Description>
          </IconDescription>
        </>
      );
    }
  };
  return (
    <div className={styles.container}>
      <TaskBar />
      <InvoiceArea>
        {renderInvoices()}
      </InvoiceArea>
    </div>
  );
};

export default Home;
