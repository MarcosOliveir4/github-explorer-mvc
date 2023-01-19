import { RepositorioContainer } from "./styles";

type RepositorioProps = {
  id: number;
  name: string;
  html_url: string;
};
export const Repositorio: React.FC<RepositorioProps> = ({
  html_url,
  id,
  name,
}: RepositorioProps) => {
  return (
    <RepositorioContainer href={html_url} key={id}>
      {name}
    </RepositorioContainer>
  );
};
