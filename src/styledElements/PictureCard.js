import styled, { css } from 'styled-components';

export default styled.article`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  height: 100%;

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    user-drag: none;
  }

  .cheat-text {
    position: absolute;
    color: pink;
    background-color: black;
    font-size: 2rem;
    right: 0;
    bottom: 0;
  }

  ${props => props.buffer && css`
    & {
      display: none;
    }
  `}

  @media (min-width: 480px) {
    & {
      border-radius: 5px;
      height: calc(100vw * 0.35);
      max-height: calc(2500px * 0.35);
    }
  }
`;
