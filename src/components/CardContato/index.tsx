import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'
import Editar from '../../assets/pen-to-square-solid.svg'
import Deletar from '../../assets/trash-solid.svg'
import Salvar from '../../assets/floppy-disk-solid.svg'
import Cancelar from '../../assets/ban-solid.svg'
import ContatoClass from '../../models/Contato'
import { favoritar, remover } from '../../store/reducers/contato'

type Props = ContatoClass

const CardContato = ({ id, foto, nome, telefone, email, favorito }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const editandoCard = () => {
    setEstaEditando(!estaEditando)
  }

  function favoritarContato() {
    dispatch(
      favoritar({
        id,
        favoritado: !favorito
      })
    )
  }

  const imgErroCarregamento = (e: React.SyntheticEvent) => {
    e.currentTarget.setAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/39436063?s=400&v=4'
    )
  }

  return (
    <S.CardContent>
      {estaEditando ? (
        <S.Icons>
          <img src={Salvar} onClick={editandoCard} />
          <img src={Cancelar} onClick={editandoCard} />
        </S.Icons>
      ) : (
        <S.Icons>
          <img
            src={favorito ? SolidStar : RegularStar}
            onClick={favoritarContato}
          />
          <img src={Editar} onClick={editandoCard} />
          <img src={Deletar} onClick={() => dispatch(remover(id))} />
        </S.Icons>
      )}

      <S.FotoContato
        src={foto}
        alt="Foto do contato"
        onError={imgErroCarregamento}
      />
      <S.Infos>
        <S.Nome>{nome}</S.Nome>
        <S.Info>Telefone: {telefone}</S.Info>
        <S.Info title={email}>Email: {email}</S.Info>
      </S.Infos>
    </S.CardContent>
  )
}

export default CardContato
