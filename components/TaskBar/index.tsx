import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { initalItems } from "../../data";
import FilterItem from "../FilterItem";
import data from "./filterData";
import { TextArea, Title, SubTitle, FilterContainer, FilterText, FilterMenu, Button, IconContainer, ButtonText, TaskBarSection, Wrapper } from "./styles";

export const TaskBar = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const renderSortItems = () => {
    return data.map((item, index) => {
      return <FilterItem key={index} name={item.name} />;
    });
  };

  return (
    <TaskBarSection>
      <Wrapper>
        <TextArea>
          <Title>Invoices</Title>
          <SubTitle>{`${initalItems.length} invoices`}</SubTitle>
        </TextArea>
        <FilterContainer onClick={handleActive}>
          <FilterText>Filter</FilterText>
          <Image
            src={"/assets/icon-arrow-down.svg"}
            alt={"Arrow icon"}
            width={9}
            height={4}
            style={active ? { transform: "rotate(180deg)" } : {}}
          />
          {active && <FilterMenu>{renderSortItems()}</FilterMenu>}
        </FilterContainer>
        <Button>
          <IconContainer>
            <Image
              src={"/assets/icon-plus.svg"}
              width={10}
              height={10}
              alt={"plus"}
            />
          </IconContainer>
          <ButtonText>New</ButtonText>
        </Button>
      </Wrapper>
    </TaskBarSection>
  );
};
