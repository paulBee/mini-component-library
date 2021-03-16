import React from 'react';
import styled, {css} from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...inputProps
}) => {
  return (
      <Wrapper width={width + "px"} size={size}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <IconWrapper>
          <Icon id={icon} size={ICON_SIZES[size]} />
        </IconWrapper>
        <TextInput {...inputProps} />
      </Wrapper>
  )
};

const ICON_SIZES = {
  small: 16,
  large: 24
}

const SIZES = {
  small: css`
    --fontSize: ${14/16}rem;
    --iconSize: ${ICON_SIZES.small}px;
    --borderThickness: 1px;
    --height: ${24/16}rem;
  `,
  large: css`
    --fontSize: ${18/16}rem;
    --iconSize: ${ICON_SIZES.large}px;
    --borderThickness: 2px;
    --height: ${36/16}rem;
  `
}

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};
  width: ${p => p.width};
  
  ${p => SIZES[p.size]}
  
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  height: var(--iconSize);
`

const TextInput = styled.input`
  padding-left: var(--height);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  height: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  width: 100%;
  outline-offset: 2px;
  color: inherit;
  
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput;
