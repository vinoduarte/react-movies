import { Container, Content } from "./styles";
import { Return } from "../../components/Return";
import { IoCamera } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/button";

export function Profile() {
  return (
    <Container>
      <header>
        <div class="return">
          <Return></Return>
        </div>
        <div class="imgDiv">
          <img src="https://github.com/vinoduarte.png"></img>
          <Buttons icon={IoCamera} className="camera"></Buttons>
        </div>
      </header>
      <main>
        <Content>
          <div class="profileInfos">
            <div class="secondInput">
              <Input icon={IoMdPerson} placeholder="Nome"></Input>
              <Input icon={IoMail} type="email" placeholder="Email"></Input>
            </div>
            <Input
              icon={IoLockClosed}
              type="password"
              placeholder="Senha atual"
            ></Input>
            <Input
              icon={IoLockClosed}
              type="password"
              placeholder="Nova senha"
            ></Input>
          </div>
          <Buttons title="Salvar"></Buttons>
        </Content>
      </main>
    </Container>
  );
}
