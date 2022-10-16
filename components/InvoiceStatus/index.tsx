import React, { useEffect, useState } from "react";
import { Container, StatusIndicator, StatusText } from "./styles";

interface IStatusProp {
  status: "paid" | "pending" | "draft";
}

const InvoiceStatus = ({ status }: IStatusProp) => {
  const [background, setBackground] = useState("");
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    if (status === "paid") {
      setBackground("rgba(51, 214, 159, 0.1)");
      setFontColor("#33D69F");
    } else if (status === "pending") {
      setBackground("rgba(255,143,0,0.1)");
      setFontColor("#ff8f00");
    } else if (status === "draft") {
      setBackground("rgba(255,143,0,0.1)");
      setFontColor("#ff8f00");
    }
  }, [, status]);

  return (
    <Container style={{ backgroundColor: background }}>
      <StatusIndicator style={{ backgroundColor: fontColor }} />
      <StatusText style={{ color: fontColor }}>{status}</StatusText>
    </Container>
  );
};

export default InvoiceStatus;
