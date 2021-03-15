import styled, { css } from 'styled-components';

export default styled.article`
  display: inline-block;
  width: 250px;
  height: 165px;
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    ${props => !props.selected && css`
      /* box-shadow: 0 0 5px 6px rgba(225, 39, 217, 0.6); */
      box-shadow: 0 0 6px 6px rgba(80, 255, 80, 0.6);
    `}
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => props.selected && css`
      /* box-shadow: 0 0 0 6px rgba(255, 50, 230, 1); */
      box-shadow: 0 0 4px 8px rgba(80, 255, 80, 1);
    `};
`;
