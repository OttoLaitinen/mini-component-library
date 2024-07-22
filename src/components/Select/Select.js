import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectContainer>
      <HiddenNativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </HiddenNativeSelect>
      <DisplayedSelectContainer>
        <span>{displayedValue}</span>
        <Icon id={"chevron-down"} size={24} strokeWidth={2} />
      </DisplayedSelectContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const HiddenNativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
  appearance: none;
`;

const DisplayedSelectContainer = styled.div`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  width: fit-content;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  ${HiddenNativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${HiddenNativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
