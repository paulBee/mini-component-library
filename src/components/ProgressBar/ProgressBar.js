import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <Background
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
  >
    <Bar value={value} />
    <VisuallyHidden>{value}</VisuallyHidden>
  </Background>;
};

const Background = styled.div`
  --border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px \\${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  ${p => backgroundSizes[p.size] || defaultSize}
`
const backgroundSizes = {
  small: css`
    height: 8px;
  `,
  medium: css`
    height: 12px;
  `,
  large: css`
    height: 16px;
    padding: 4px;
    --border-radius: 8px;
  `
}
const defaultSize = backgroundSizes.medium

const Bar = styled.div`
  background-color: ${COLORS.primary};
  margin-right: auto;
  width: ${p => p.value + "%"};
  height: 100%;
  border-radius: inherit;
  border-top-right-radius: ${p => valueToBorderRadius(p.value)};
  border-bottom-right-radius: ${p => valueToBorderRadius(p.value)};
`

function valueToBorderRadius(value) {
  if (value < 99) {
    return '0'
  }

  if (value < 100) {
    const fraction = value - 99
    return `calc(var(--border-radius) * ${fraction})`
  }

  return 'inherit'
}

export default ProgressBar;
