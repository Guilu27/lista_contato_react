import { useState } from 'react'

import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'
import Editar from '../../assets/pen-to-square-solid.svg'
import Deletar from '../../assets/trash-solid.svg'
import Salvar from '../../assets/floppy-disk-solid.svg'
import Cancelar from '../../assets/ban-solid.svg'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const CardContato = ({ id, foto, nome, telefone, email, favorito }: Props) => {
  const [favoritado, setFavoritado] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)

  const alternarFavorito = () => {
    setFavoritado(!favoritado)
  }

  const editandoCard = () => {
    setEstaEditando(!estaEditando)
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
          {favorito ? (
            <img src={SolidStar} onClick={alternarFavorito} />
          ) : (
            <img src={RegularStar} onClick={alternarFavorito} />
          )}
          <img src={Editar} onClick={editandoCard} />
          <img src={Deletar} />
        </S.Icons>
      )}

      <S.FotoContato src={foto} alt="" />
      <S.Infos>
        <S.Nome>{nome}</S.Nome>
        <S.Info>Telefone: {telefone}</S.Info>
        <S.Info title={email}>Email: {email}</S.Info>
      </S.Infos>
    </S.CardContent>
  )
}

export default CardContato
