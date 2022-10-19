import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <TitleHeader>{props.sendPost.title}</TitleHeader>
      <Image src={props.sendPost.postPic} />
      <Description>{props.sendPost.text}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
