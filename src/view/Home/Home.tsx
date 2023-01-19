import React, { FormEvent, useMemo, useState } from "react";
import { UsuarioController } from "../../controller";
import { UsuarioInterfaces } from "../../model";
import { InputBusca, Perfil, Repositorio } from "../Components";
import {
  ContainerHome,
  FormHome,
  ImageHome,
  RepositorioHome,
  RepositorioHomeContainer,
  SectionHome,
} from "./styles";

export const Home: React.FC = () => {
  const usuarioController = useMemo(() => new UsuarioController(), []);
  const [usuario, setUsuario] =
    useState<UsuarioInterfaces.Receive.BuscarUsuario>();
  const [repositorios, setRepositorios] =
    useState<UsuarioInterfaces.Receive.BuscarRepositoriosCurtido[]>();
  const [usuarioNome, setUsuarioNome] = useState<string>("");

  const buscarUsuario = (event: FormEvent) => {
    event.preventDefault();
    usuarioController
      .buscarUsuarioController({ nome: usuarioNome })
      .then(({ data }) => {
        setUsuario(data);
      });
    usuarioController
      .buscarRepositoriosCurtidoController({
        nome: usuarioNome,
      })
      .then(({ data }) => {
        setRepositorios(data);
      });
  };

  return (
    <ContainerHome>
      <h1>Busque por usuário no GitHub</h1>
      <FormHome autoComplete="off" onSubmit={buscarUsuario}>
        <InputBusca
          value={usuarioNome}
          placeholder="Busque por um usuário"
          change={(event) => setUsuarioNome(event)}
        />
      </FormHome>
      <SectionHome>
        {usuario && (
          <>
            <ImageHome src={usuario.avatar_url} />
            <Perfil
              repositorios={usuario.public_repos}
              seguidores={usuario.followers}
              seguindo={usuario.following}
              html_url={usuario.html_url}
            />
            {repositorios && (
              <RepositorioHome>
                <RepositorioHomeContainer>
                  {repositorios.map((repositorio, index) => (
                    <Repositorio
                      html_url={repositorio.html_url}
                      name={repositorio.name}
                      id={repositorio.id}
                      key={index}
                    />
                  ))}
                </RepositorioHomeContainer>
              </RepositorioHome>
            )}
          </>
        )}
      </SectionHome>
    </ContainerHome>
  );
};
