import styled from "styled-components";

export const Button = styled.button`
  height: 2.5rem;
  padding: 0px 16px;
  font-size: 1rem;

  border: none;
  border-radius: 8px;

  transition: filter 0.2s;

  background-color: var(--green);
  color: var(--shape);
  font-weight: bold;

  &:hover {
    filter: brightness(0.8);
  }
`;
