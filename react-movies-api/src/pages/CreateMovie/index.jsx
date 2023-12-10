import { Container, Content } from "./styles"
import { Header } from "../../components/header"
import { Return } from "../../components/Return"
import { Input } from "../../components/Input"
import { Buttons } from "../../components/button"
import { Tag } from "../../components/tag"
import { IoAdd } from "react-icons/io5"
import { InputNew } from "../../components/InputNew"
import { IoClose } from "react-icons/io5"

export function CreateMovie() {
  return(
    <Container>
      <Header></Header>
      <main>
      <Content>
        <Return></Return>
        <div id="addingMovie">
          <h1>Novo filme</h1>
          <div id="titleandscore"><Input placeholder="Título"/><Input placeholder="Sua nota"/></div>
          <InputNew placeholder="Observações" /> 
        </div>
          <h2>Marcadores</h2>
        <div id="addingMovieTags">
          <Tag className="addTag" title="React"  icon={IoClose}></Tag><Buttons className="addTagButton" title="Novo marcador" icon={IoAdd}></Buttons>
        </div>
        <div id="deleteOrSave">
          <Buttons className="deleteMovie" title="Excluir filme"/><Buttons className="submit" title="Salvar alterações"/>
        </div>
      </Content>
      </main>
    </Container>
  )
}