import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { Buttons } from "../../components/button";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <div class="inputs">
          <Input icon={IoMdPerson} placeholder="Nome"></Input>
          <Input icon={IoMail} type="email" placeholder="E-mail"></Input>
          <Input
            icon={IoLockClosed}
            type="password"
            placeholder="Senha"
          ></Input>
        </div>
        <Buttons className="submitButton" title="Entrar"></Buttons>
        <Link className="returnButton" to="/">
          <RiArrowLeftLine />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
