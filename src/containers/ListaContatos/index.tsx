import { useDispatch, useSelector } from 'react-redux'

import CardContato from '../../components/CardContato'
import { Botao } from '../../styles'
import { Header, Itens } from './styles'
import { RootReducer } from '../../store'
import { mostrarFavoritos } from '../../store/reducers/filtro'

const ListaContato = () => {
  const dispatch = useDispatch()
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
      if (!todosContatos) {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.favorito === true
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtrarContatos()

  function mostrarContatosFavoritos() {
    dispatch(
      mostrarFavoritos({
        todosContatos: !todosContatos
      })
    )
  }

  return (
    <div>
      <Header>
        <h2>{contatos.length} contatos</h2>
        <Botao onClick={mostrarContatosFavoritos}>
          {todosContatos ? 'Favoritos' : 'Todos'}
        </Botao>
      </Header>

      <Itens>
        {contatos.map((c) => (
          <li key={c.nome}>
            <CardContato {...c} />
          </li>
        ))}
      </Itens>
    </div>
  )
}
export default ListaContato
