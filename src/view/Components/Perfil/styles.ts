import styled from "styled-components";

export const PerfilUl = styled.ul`
  list-style: none;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: rgba(0, 0, 0, 0.041);
  padding: 1rem;

  width: 250px;
  border-radius: 8px;
  li {
    color: var(--text-title);

    span {
      color: var(--text-body);
    }
  }
`;
