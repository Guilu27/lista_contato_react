import CardContato from '../../components/CardContato'
import { Lista } from './styles'

const ListaContato = () => (
  <>
    <div>
      <h2>3 contatos</h2>
      <button type="button">Favoritos</button>
    </div>

    <Lista>
      <CardContato />
      <CardContato />
      <CardContato />
      <CardContato />
    </Lista>
  </>
)

export default ListaContato
