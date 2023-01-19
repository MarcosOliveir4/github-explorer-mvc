import React from "react";
import { Button, InputText } from "../Form";
import { InputBuscaContainer } from "./styles";
type InputBuscaProps = {
  value: string;
  change: (event: string) => void;
  placeholder: string;
};
export const InputBusca: React.FC<InputBuscaProps> = ({
  change,
  value,
  placeholder,
}: InputBuscaProps) => {
  return (
    <InputBuscaContainer>
      <InputText
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => change(event.target.value)}
      />
      <Button disabled={!value}>Buscar</Button>
    </InputBuscaContainer>
  );
};
