import styled, { css } from 'styled-components';

export default styled.button`
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.6rem;
  transition: all 0.2s;
  cursor: pointer;
  background-color: rgb(220, 220, 220);

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  ${props => props.main && css`
  background-color: rgb(82, 235, 123);
    padding: 0.8rem 2rem;
  `}

  ${props => props.main && !props.disabled && css`
    &:hover {
      background-color: rgb(102, 255, 153);
    }
  `}

  ${props => props.disabled && css`
    background-color: rgb(180, 180, 180);
    color: rgb(100, 100, 100);
    transition: none;
    cursor: default;

    &:hover {
      background-color: rgb(180, 180, 180);
    }
  `}

  ${props => props.again && css`
    background-color: rgb(82, 235, 123);

    &:hover {
      background-color: rgb(102, 255, 153);
    }
  `}

  ${props => props.start && css`
    padding: 0.8rem 2.5rem;
  `}
`;
