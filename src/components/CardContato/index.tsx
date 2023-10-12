import { useState } from 'react'

import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'
import Editar from '../../assets/pen-to-square-solid.svg'
import Deletar from '../../assets/trash-solid.svg'

const CardContato = () => {
  const [favoritado, setFavoritado] = useState(false)

  // Função para alternar o estado de favoritado
  const alternarFavorito = () => {
    setFavoritado(!favoritado)
  }

  return (
    <S.CardContent>
      <S.icons>
        {favoritado ? (
          <img src={SolidStar} onClick={alternarFavorito} />
        ) : (
          <img src={RegularStar} onClick={alternarFavorito} />
        )}
        <img src={Editar} />
        <img src={Deletar} />
      </S.icons>

      <S.FotoContato
        src="https://img.freepik.com/vetores-gratis/paisagem-gradiente-com-portao-torii-na-agua_23-2148660095.jpg"
        alt=""
      />
      <S.Nome>Nome da Pessoa</S.Nome>
      <S.info>Telefone: (48) 99999-9999</S.info>
      <S.info>Email: nome@gmail.com</S.info>
    </S.CardContent>
  )
}

export default CardContato
