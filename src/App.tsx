import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './pages/Home'
import NovoContato from './pages/NovoContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novocontato',
    element: <NovoContato />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
