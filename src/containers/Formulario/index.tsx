import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao, FotoContato, TituloPagina } from '../../styles'
import { BotaoUpload, CampoForm, Form, FormContainer } from './styles'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const distpatch = useDispatch()
  const navigate = useNavigate()

  const [foto, setFoto] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [fotoPrevia, setFotoPrevia] = useState('Imagem do contato')

  const cadastrarTarefa = (e: FormEvent) => {
    e.preventDefault()

    distpatch(
      cadastrar({
        foto,
        nome,
        telefone,
        email,
        favorito: false
      })
    )
    navigate('/')
  }

  const handleUploadFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const arquivo = e.target.files[0]
      setFotoPrevia(arquivo.name)
      if (arquivo) {
        const urlDaImagem = URL.createObjectURL(arquivo)
        setFoto(urlDaImagem)
      }
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={cadastrarTarefa}>
        <TituloPagina as="h2">Novo Contato</TituloPagina>

        <BotaoUpload as="label" htmlFor="upload-foto">
          {fotoPrevia}
        </BotaoUpload>

        <CampoForm
          type="file"
          accept="image/*"
          onChange={handleUploadFoto}
          id="upload-foto"
          style={{ display: 'none' }}
        />
        {foto && <FotoContato src={foto} alt="Imagem de prévia" />}

        <CampoForm
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <CampoForm
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <CampoForm
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Botao type="submit">Salvar Contato</Botao>
      </Form>
    </FormContainer>
  )
}
export default Formulario
