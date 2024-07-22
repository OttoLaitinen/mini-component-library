import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const inputRef = useRef(null);
  const handleIconClick = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <InputContainer width={width} size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon
        id={icon}
        strokeWidth={2}
        onClick={handleIconClick}
        size={SIZES[size].iconSize}
      />
      <Input placeholder={placeholder} ref={inputRef} size={size} />
    </InputContainer>
  );
};

const SIZES = {
  small: {
    fontSize: 0.875,
    iconSize: 16,
    bottomBorder: 1,
  },
  large: {
    fontSize: 1.125,
    iconSize: 24,
    bottomBorder: 2,
  },
};

const Input = styled.input`
  border: none;
  font-size: 16px;
  color: ${COLORS.gray700};
  font-weight: 700;
  padding: 8px 0;
  width: 100%;
  background-color: transparent;
  font-size: ${({ size }) => SIZES[size].fontSize}rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const InputContainer = styled.div`
  width: ${(props) => props.width}px;

  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: ${({ size }) => SIZES[size].bottomBorder}px solid
    ${COLORS.black};
  color: ${COLORS.gray700};

  &:focus-within {
    outline-offset: 2px;
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  &:hover {
    color: ${COLORS.black};
    ${Input} {
      color: ${COLORS.black};
    }
  }
`;

export default IconInput;
