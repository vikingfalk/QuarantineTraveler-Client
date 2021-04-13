import styled from 'styled-components';

export default styled.article`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;

  & > img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .cheat-text {
    position: absolute;
    color: pink;
    background-color: black;
    font-size: 2rem;
  }
`;
