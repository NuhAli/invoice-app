import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { TaskBar } from "../components/TaskBar";
import InvoiceCard from "../components/InvoiceCard";
import styled from "styled-components";
import { initalItems } from "../data";

const InvoiceArea = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 0;
`;

const Home: NextPage = () => {
  const renderInvoices = () => {
    return initalItems.map((item) => {
      return <InvoiceCard key={item.id} invoice={item} />;
    });
  };
  return (
    <div className={styles.container}>
      <TaskBar />
      <InvoiceArea>{renderInvoices()}</InvoiceArea>
    </div>
  );
};

export default Home;
