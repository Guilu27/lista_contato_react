import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  nome?: string
  todosContatos: boolean
}

const initialState: FiltroState = {
  nome: '',
  todosContatos: true
}
const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload
    },
    mostrarFavoritos: (state, action: PayloadAction<FiltroState>) => {
      state.todosContatos = action.payload.todosContatos
    }
  }
})

export const { alteraNome, mostrarFavoritos } = filtroSlice.actions
export default filtroSlice.reducer
