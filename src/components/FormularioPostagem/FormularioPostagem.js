import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = (props) => {
  const onChangeTitle = (event) => {
    props.setTitle(event.target.value);
  };

  const onChangePostPic = (event) => {
    props.setPostPic(event.target.value);
  };

  const onChangeText = (event) => {
    props.setText(event.target.value);
  };

  const post = () => {
    const sendPost = {
      title: props.title,
      post: props.postPic,
      text: props.text
    };
    props.setPost(sendPost);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.title} onChange={onChangeTitle} />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.postPic} onChange={onChangePostPic} />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.text} onChange={onChangeText} />
        </StyledLabel>
        <SendButton onClick={post}>Enviar</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
