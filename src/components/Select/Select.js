import React, {useState} from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [hasFocus, setFocus] = useState(false)

  return <>
      <Wrapper hasFocus={hasFocus}>
        <VisuallyHidden><label for={label}>{label}</label></VisuallyHidden>
        {displayedValue}
        <Toggle id="chevron-down" size={24} />
        <SelectInteraction
            value={value}
            id={label}
            onChange={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            aria-labelled
        >
          {children}
        </SelectInteraction>
      </Wrapper>
  </>;
};

const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  padding: 12px 52px 12px 16px;
  width: max-content;
  border-radius: 8px;
  
  outline: ${p => p.hasFocus ? "5px auto #4374CB": ""};
  
  &:hover {
    color: ${COLORS.black};
  }
`

const Toggle = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 10px;
`

const SelectInteraction = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export default Select;
