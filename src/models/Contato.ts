class Contato {
  nome: string
  telefone: string
  email: string
  foto: string
  favorito: boolean
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    foto: string,
    favorito: boolean,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.foto = foto
    this.favorito = favorito
    this.id = id
  }
}

export default Contato
