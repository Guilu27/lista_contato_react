import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Botao, TituloPagina } from '../../styles'
import { CampoForm, Form, FormContainer } from './styles'
import { FormEvent, useState } from 'react'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const distpatch = useDispatch()
  const navigate = useNavigate()

  const [foto, setFoto] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

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

  return (
    <FormContainer>
      <Form onSubmit={cadastrarTarefa}>
        <TituloPagina as="h2">Novo Contato</TituloPagina>
        <CampoForm
          type="text"
          placeholder="Link da foto do contato"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
        />
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
