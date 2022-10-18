import styled from "styled-components";

export const Item = styled.div`
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

export const InputCheckbox = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: #dfe3fa;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #0c0e16;
`;