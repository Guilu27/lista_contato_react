import { useState } from 'react'

import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'
import Editar from '../../assets/pen-to-square-solid.svg'
import Deletar from '../../assets/trash-solid.svg'
import Salvar from '../../assets/floppy-disk-solid.svg'
import Cancelar from '../../assets/ban-solid.svg'

type Props = {
  email: string
}

const CardContato = ({ email }: Props) => {
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
          {favoritado ? (
            <img src={SolidStar} onClick={alternarFavorito} />
          ) : (
            <img src={RegularStar} onClick={alternarFavorito} />
          )}
          <img src={Editar} onClick={editandoCard} />
          <img src={Deletar} />
        </S.Icons>
      )}

      <S.FotoContato
        src="https://img.freepik.com/vetores-gratis/paisagem-gradiente-com-portao-torii-na-agua_23-2148660095.jpg"
        alt=""
      />
      <S.Infos>
        <S.Nome>Nome da Pessoa</S.Nome>
        <S.Info>Telefone: (48) 99999-9999</S.Info>
        <S.Info title={email}>Email: {email}</S.Info>
      </S.Infos>
    </S.CardContent>
  )
}

export default CardContato
