import BarraPesquisa from './components/BarraPesquisa'
import ListaContato from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <h1>Lista de Contatos</h1>
        <BarraPesquisa />
        <ListaContato />
      </Container>
    </>
  )
}

export default App
