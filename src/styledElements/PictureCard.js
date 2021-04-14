import styled from 'styled-components';

export default styled.article`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  height: calc(100vw * 0.7);

  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cheat-text {
    position: absolute;
    color: pink;
    background-color: black;
    font-size: 2rem;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 480px) {
    & {
      border-radius: 5px;
      height: calc(100vw * 0.35);
    }
  }
`;
