import styled, { css } from 'styled-components';

export default styled.article`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100vw * 0.25);
  /* overflow: hidden; */
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;

  & > .country-name {
    display: none;
    position: absolute;
    background-color: rgba(150, 150, 150, 0.5);
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

    & > p {
      display: none;
      color: white;
      text-transform: capitalize;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      font-size: 1.5rem;
    }

    & > .score-gained {
      position: absolute;
      color: rgb(40, 255, 40);
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
      animation: scoreGained 1.5s ease-out forwards;
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  ${props => props.disabled && css`
    cursor: default;

    & > .country-name {
      display: flex;
    }
  `}

  ${props => props.tried && css`
    box-shadow: 0 0 2px 3px rgba(255, 40, 40, 0.8);
    cursor: default;

    & > .country-name {
      display: flex;
    }

    & > .country-name > p {
      display: block;
    }
  `}

  ${props => props.matched && css`
    box-shadow: 0 0 2px 3px rgba(40, 255, 40, 0.8);

    & > .country-name > p {
      display: block;
    }
  `}

  @media (min-width: 480px) {
    &:hover {
      ${props => !props.tried && !props.disabled && css`
        box-shadow: 0 0 6px 6px rgba(80, 255, 80, 0.6);
      `}
    }

    & {
      height: 100%;
    }
  }

  @keyframes scoreGained {
    0% {bottom: 50%; opacity: 100%}
    40% {opacity: 100%}
    100% {bottom: 8rem; opacity: 0%}
  }
`;
