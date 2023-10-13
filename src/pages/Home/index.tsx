import ListaContato from '../../containers/ListaContatos'
import { BotaoFixo, Campo, TituloPagina } from '../../styles'

const Home = () => (
  <>
    <TituloPagina>Lista de Contatos</TituloPagina>
    <Campo type="text" placeholder="Pesquisar pelo nome" />
    <ListaContato />
    <BotaoFixo to="/novocontato">+</BotaoFixo>
  </>
)

export default Home
