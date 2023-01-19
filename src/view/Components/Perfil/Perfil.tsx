import { Button } from "../Form";
import { PerfilUl } from "./styles";

type PerfilProps = {
  repositorios: number;
  seguidores: number;
  seguindo: number;
  html_url: string;
};

export const Perfil: React.FC<PerfilProps> = ({
  repositorios,
  seguidores,
  seguindo,
  html_url,
}: PerfilProps) => {
  const visitarPerfil = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
  };
  return (
    <PerfilUl>
      <li>
        Repositórios: <span>{repositorios}</span>
      </li>
      <li>
        Seguidores: <span>{seguidores}</span>
      </li>
      <li>
        Seguindo: <span>{seguindo}</span>
      </li>
      <li>
        <Button
          onClick={(event) => {
            event.preventDefault();
            visitarPerfil(html_url);
          }}
        >
          Visitar perfil
        </Button>
      </li>
    </PerfilUl>
  );
};
