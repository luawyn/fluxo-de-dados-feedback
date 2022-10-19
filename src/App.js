import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [sendLogin, setLogin] = useState("");
  const [title, setTitle] = useState("");
  const [postPic, setPostPic] = useState("");
  const [text, setText] = useState("");
  const [sendPost, setPost] = useState("");
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header sendLogin={sendLogin} setLogin={setLogin} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              name={name}
              setName={setName}
              profilePic={profilePic}
              setProfilePic={setProfilePic}
              sendLogin={sendLogin}
              setLogin={setLogin}
            />
          ) : (
            <FormularioPostagem
              title={title}
              setTitle={setTitle}
              postPic={postPic}
              setPostPic={setPostPic}
              text={text}
              setText={setText}
              sendPost={sendPost}
              setPost={setPost}
            />
          )}
        </aside>
        <TelaDaPostagem
          postPic={postPic}
          title={title}
          text={text}
          sendPost={sendPost}
          setPost={setPost}
        />
      </Container>
    </>
  );
}

export default App;
