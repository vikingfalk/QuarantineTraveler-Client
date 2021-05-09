import styled, { css } from 'styled-components';

export default styled.button`
  height: 2rem;
  width: 3rem;
  border: 1px solid #333;
  cursor: pointer;
  border-radius: 2px;
  opacity: 50%;
  margin-right: 0.5rem;

  &:last-of-type {
    margin-right: 0;
  }

  ${props => css`
    background-image: url('assets/flags/${props.country}.png');
    background-size: cover;
    background-position: center;
  `}

  ${props => props.active && css`
    opacity: 100%;
  `}
`;
