import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IFilterItem } from "../../types/filterItem";

const Item = styled.div`
  height: auto;
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:nth-child(2) {
    margin: 1rem 0;
  }
`;

const InputCheckbox = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: #dfe3fa;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;
`;

const FilterItem = ({ name }: IFilterItem) => {
  const [select, setSelect] = useState(false);
  const toggleSelect = () => {
    setSelect(!select)
  }

  return (
    <Item>
      <InputCheckbox
        style={
          select
            ? { backgroundColor: "#7C5DFA" }
            : { backgroundColor: "#DFE3FA" }
        }
        onClick={toggleSelect}
      >
        {select && (
          <Image
            src={"/assets/icon-check.svg"}
            alt={"check"}
            height={10}
            width={10}
          />
        )}
      </InputCheckbox>
      <CheckboxLabel>{name}</CheckboxLabel>
    </Item>
  );
};

export default FilterItem;
