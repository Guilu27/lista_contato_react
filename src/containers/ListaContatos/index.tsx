import CardContato from '../../components/CardContato'
import { Botao } from '../../styles'
import { Header, Itens } from './styles'

const ListaContato = () => (
  <div>
    <Header>
      <h2>3 contatos</h2>
      <Botao>Favoritos</Botao>
    </Header>

    <Itens>
      <CardContato email="x5y9zA@exam1414ple.com" />

      <CardContato email="e9mailaddre1s@exampl4545454ef4asd5f4asd5f4asd5f45e.com" />
      <CardContato email="user12345678@example.com" />
      <CardContato email="user12345678@example.com" />
    </Itens>
  </div>
)

export default ListaContato
