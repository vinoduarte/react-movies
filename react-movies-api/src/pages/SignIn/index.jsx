import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { Buttons } from "../../components/button";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
        <div class="inputs">
          <Input 
          icon={IoMail} 
          type="email" 
          placeholder="E-mail"
          ></Input>
          <Input
            icon={IoLockClosed}
            type="password"
            placeholder="Senha"
          ></Input>
        </div>
        <Buttons className="submitButton" title="Entrar"></Buttons>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
