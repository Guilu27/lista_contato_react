import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import RegularStar from '../../assets/star-regular.svg'
import SolidStar from '../../assets/star-solid.svg'
import Editar from '../../assets/pen-to-square-solid.svg'
import Deletar from '../../assets/trash-solid.svg'
import Salvar from '../../assets/floppy-disk-solid.svg'
import Cancelar from '../../assets/ban-solid.svg'
import ContatoClass from '../../models/Contato'
import { editar, favoritar, remover } from '../../store/reducers/contato'
import { FotoContato } from '../../styles'

type Props = ContatoClass

const CardContato = ({
  id,
  foto: fotoOriginal,
  nome: nomeOriginal,
  telefone: telefoneOriginal,
  email: emailOriginal,
  favorito
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [foto, setFoto] = useState(fotoOriginal)
  const [nome, setNome] = useState(nomeOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [email, setEmail] = useState(emailOriginal)

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

    setFoto('https://avatars.githubusercontent.com/u/39436063?s=400&v=4')
  }

  const handleUploadFoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const arquivo = e.target.files[0]
      if (arquivo) {
        const urlDaImagem = URL.createObjectURL(arquivo)
        setFoto(urlDaImagem)
      }
    }
  }

  function editarContato() {
    dispatch(
      editar({
        foto,
        nome,
        telefone,
        email,
        favorito,
        id
      })
    )

    setEstaEditando(!estaEditando)
  }

  function cancelarEdicao() {
    setFoto(fotoOriginal)
    setNome(nomeOriginal)
    setTelefone(telefoneOriginal)
    setEmail(emailOriginal)
    setEstaEditando(!estaEditando)
  }

  return (
    <S.CardContent>
      {estaEditando ? (
        <S.Icons>
          <img src={Salvar} onClick={editarContato} />
          <img src={Cancelar} onClick={cancelarEdicao} />
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

      <S.ContainerFotoContato>
        {estaEditando ? (
          <>
            <S.IconeEdicaoFotoContato htmlFor={`upload-foto-${id}`}>
              <img src={Editar} />
            </S.IconeEdicaoFotoContato>

            <input
              type="file"
              accept="image/*"
              onChange={handleUploadFoto}
              id={`upload-foto-${id}`}
              style={{ display: 'none' }}
            />

            <FotoContato src={foto} alt="Imagem de prévia" />
          </>
        ) : (
          <FotoContato
            src={foto}
            alt="Foto do contato"
            onError={imgErroCarregamento}
          />
        )}
      </S.ContainerFotoContato>

      <S.Infos>
        <S.Nome>
          <label htmlFor={`nome-${id}`}>Nome:</label>
          <textarea
            disabled={!estaEditando}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            id={`nome-${id}`}
          ></textarea>
        </S.Nome>

        <S.Info>
          <label htmlFor={`telefone-${id}`}>Telefone:</label>
          <textarea
            disabled={!estaEditando}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            id={`telefone-${id}`}
          ></textarea>
        </S.Info>
        <S.Info>
          <label htmlFor={`email-${id}`}>Email:</label>
          <textarea
            disabled={!estaEditando}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id={`email-${id}`}
          ></textarea>
        </S.Info>
      </S.Infos>
    </S.CardContent>
  )
}

export default CardContato
