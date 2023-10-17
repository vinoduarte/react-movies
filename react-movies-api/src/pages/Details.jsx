import { Header } from '../components/header'
import { Buttons } from '../components/button'
import Container from './style.js'
import { Return } from '../components/Return'
import { Section } from '../components/section'
import { Tag } from '../components/tag'


export default function Details() {
  return (
    <Container>
     <Header></Header>
     <Return></Return>
     <Section title="Interestellar">
      <div id='tags'>
       <Tag title="Ficção científica"></Tag>
       <Tag title="Drama"></Tag>
       <Tag title="Família"></Tag>
      </div>
     </Section> 
    </Container>
  )
}