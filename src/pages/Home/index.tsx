import BarraPesquisa from '../../components/BarraPesquisa'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaContato from '../../containers/ListaContatos'

const Home = () => (
  <>
    <h1>Lista de Contatos</h1>
    <BarraPesquisa />
    <ListaContato />
    <BotaoAdicionar />
  </>
)

export default Home
