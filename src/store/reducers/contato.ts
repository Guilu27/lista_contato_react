import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Maria Silva',
      telefone: '(48) 99947-9289',
      email: 'maria@example.com',
      foto: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      favorito: false,
      id: 1
    },
    {
      nome: 'João Oliveira',
      telefone: '(47) 98765-4321',
      email: 'joao@example.com',
      foto: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
      favorito: true,
      id: 2
    },
    {
      nome: 'Ana Pereira',
      telefone: '(41) 99512-3456',
      email: 'ana@example.com',
      foto: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      favorito: true,
      id: 3
    },
    {
      nome: 'Pedro Santos',
      telefone: '(55) 97733-4444',
      email: 'pedro@example.com',
      foto: 'https://menshaircuts.com/wp-content/uploads/2021/06/tp-fade-haircut-black-men-1.jpg',
      favorito: false,
      id: 4
    },
    {
      nome: 'Luisa Ferreira',
      telefone: '(11) 91122-3333',
      email: 'luisa@example.com',
      foto: 'https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg',
      favorito: true,
      id: 5
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
