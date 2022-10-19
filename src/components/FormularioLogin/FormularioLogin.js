import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const onChangeName = (event) => {
    props.setName(event.target.value);
  };

  const onChangeProfilePic = (event) => {
    props.setProfilePic(event.target.value);
  };

  const login = () => {
    const sendLogin = {
      name: props.name,
      profilePic: props.ProfilePic
    };
    props.setLogin(sendLogin);
    props.setPageFlow(2);
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.name} onChange={onChangeName} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"}
            value={props.profilePic}
            onChange={onChangeProfilePic}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
