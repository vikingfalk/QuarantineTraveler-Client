import styled, { css } from 'styled-components';

export default styled.article`
  display: block;
  width: 100%;
  height: calc(100vw * 0.25);
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 480px) {
    &:hover {
      ${props => !props.selected && css`
        box-shadow: 0 0 6px 6px rgba(80, 255, 80, 0.6);
      `}
    }

    & {
      height: 100%;
    }
  }
`;
