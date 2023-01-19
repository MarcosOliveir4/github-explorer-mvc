import { AxiosResponse } from "axios";
import { httpApi, Usuario, UsuarioInterfaces } from "../../model";

export class UsuarioController {
  private usuario = new Usuario(httpApi);

  public async buscarUsuarioController({
    nome,
  }: UsuarioInterfaces.Send.BuscarUsuario): Promise<
    AxiosResponse<UsuarioInterfaces.Receive.BuscarUsuario>
  > {
    const usuario = await this.usuario.buscarUsuario({ nome });
    return usuario;
  }

  public async buscarRepositoriosCurtidoController({
    nome,
  }: UsuarioInterfaces.Send.BuscarUsuario): Promise<
    AxiosResponse<UsuarioInterfaces.Receive.BuscarRepositoriosCurtido[]>
  > {
    const repositoriosCurtido = await this.usuario.buscarRepositorios({ nome });
    return repositoriosCurtido;
  }
}
