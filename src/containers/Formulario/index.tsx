import { Botao, TituloPagina } from '../../styles'
import { CampoForm, Form, FormContainer } from './styles'

const Formulario = () => (
  <FormContainer>
    <Form>
      <TituloPagina as="h2">Novo Contato</TituloPagina>
      <CampoForm type="text" placeholder="Nome Completo" required />
      <CampoForm type="tel" placeholder="Telefone" required />
      <CampoForm type="email" placeholder="E-mail" required />
      <CampoForm type="text" placeholder="Link da imagem do contato" />
      <Botao type="submit">Salvar Contato</Botao>
    </Form>
  </FormContainer>
)

export default Formulario
