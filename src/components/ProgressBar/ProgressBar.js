/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <BarContainer
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      size={size}
    >
      <BarValueContainer>
        <BarValue value={value} />
      </BarValueContainer>
      <VisuallyHidden>Progress: {value}%</VisuallyHidden>
    </BarContainer>
  );
};

const SIZES = {
  small: css`
    height: 8px;
    border-radius: 4px;
  `,
  medium: css`
    height: 12px;
    border-radius: 4px;
  `,
  large: css`
    height: 24px;
    border-radius: 8px;
    padding: 4px;
  `,
};

const BarContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

  ${({ size }) => SIZES[size]}
`;

const BarValueContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const BarValue = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => value}%;
`;

export default ProgressBar;
