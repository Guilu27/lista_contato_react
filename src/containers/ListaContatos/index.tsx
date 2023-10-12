import CardContato from '../../components/CardContato'
import { Botao } from '../../styles'
import { HeaderLista, Lista } from './styles'

const ListaContato = () => (
  <>
    <HeaderLista>
      <h2>3 contatos</h2>
      <Botao>Favoritos</Botao>
    </HeaderLista>

    <Lista>
      <CardContato />
      <CardContato />
      <CardContato />
      <CardContato />
    </Lista>
  </>
)

export default ListaContato
