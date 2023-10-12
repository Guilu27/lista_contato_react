import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'

const CardContato = () => {
  const favoritado = true

  return (
    <S.CardContent>
      {favoritado ? <S.icon src={SolidStar} /> : <S.icon src={RegularStar} />}

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
