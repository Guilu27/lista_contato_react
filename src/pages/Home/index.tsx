import BarraPesquisa from '../../components/BarraPequisa'
import ListaContato from '../../containers/ListaContatos'
import { BotaoFixo, TituloPagina } from '../../styles'

const Home = () => (
  <>
    <TituloPagina>Lista de Contatos</TituloPagina>
    <BarraPesquisa />
    <ListaContato />
    <BotaoFixo to="/novocontato">+</BotaoFixo>
  </>
)

export default Home
