import styled from "styled-components";

export const FormHome = styled.form`
  display: flex;
  padding-top: 1rem;
`;

export const ContainerHome = styled.div`
  margin: 0 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ImageHome = styled.img`
  width: 250px;
  border-radius: 50%;
`;

export const SectionHome = styled.section`
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
`;

export const RepositorioHome = styled.div`
  border: 1px solid var(--text-body);
  border-radius: 8px;
  overflow-y: scroll;
  padding: 0.5rem 1rem;
  height: 250px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.09);
    border-radius: 20px;
  }
`;

export const RepositorioHomeContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
