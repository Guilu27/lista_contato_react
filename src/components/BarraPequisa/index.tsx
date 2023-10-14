import { useDispatch, useSelector } from 'react-redux'
import { alteraNome } from '../../store/reducers/filtro'
import { Campo } from '../../styles'
import { RootReducer } from '../../store'

const BarraPesquisa = () => {
  const dispatch = useDispatch()
  const { nome } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Campo
      type="text"
      placeholder="Pesquisar pelo nome"
      value={nome}
      onChange={(e) => dispatch(alteraNome(e.target.value))}
    />
  )
}

export default BarraPesquisa
