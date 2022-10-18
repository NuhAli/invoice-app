import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IFilterItem } from "../../types/filterItem";
import { Item, InputCheckbox, CheckboxLabel } from "./styles";



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
