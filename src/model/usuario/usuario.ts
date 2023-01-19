import { AxiosInstance, AxiosResponse } from "axios";

export namespace UsuarioInterfaces {
  export namespace Send {
    export interface BuscarUsuario {
      nome: string;
    }
  }
  export namespace Receive {
    export interface BuscarUsuario {
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
      html_url: string;
    }
    export interface BuscarRepositoriosCurtido {
      id: number;
      name: string;
      html_url: string;
    }
  }
}

export class Usuario {
  constructor(private apiClient: AxiosInstance) {}

  public async buscarUsuario({
    nome,
  }: UsuarioInterfaces.Send.BuscarUsuario): Promise<
    AxiosResponse<UsuarioInterfaces.Receive.BuscarUsuario>
  > {
    try {
      const response =
        await this.apiClient.get<UsuarioInterfaces.Receive.BuscarUsuario>(
          `users/${nome}`
        );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async buscarRepositorios({
    nome,
  }: UsuarioInterfaces.Send.BuscarUsuario): Promise<
    AxiosResponse<UsuarioInterfaces.Receive.BuscarRepositoriosCurtido[]>
  > {
    try {
      const response = await this.apiClient.get<
        UsuarioInterfaces.Receive.BuscarRepositoriosCurtido[]
      >(`users/${nome}/starred`);
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
