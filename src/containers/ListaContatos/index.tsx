import { useSelector } from 'react-redux'

import CardContato from '../../components/CardContato'
import { Botao } from '../../styles'
import { Header, Itens } from './styles'
import { RootReducer } from '../../store'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { nome, todosContatos } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarContatos = () => {
    let contatosFiltrados = itens

    if (nome !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (itens) =>
          itens.nome.toLocaleLowerCase().search(nome.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtrarContatos()

  return (
    <div>
      <Header>
        <h2>3 contatos</h2>
        <Botao>Favoritos</Botao>
      </Header>

      <Itens>
        {contatos.map((c) => (
          <li key={c.nome}>
            <CardContato
              id={c.id}
              foto={c.foto}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              favorito={c.favorito}
            />
          </li>
        ))}
      </Itens>
    </div>
  )
}
export default ListaContato
