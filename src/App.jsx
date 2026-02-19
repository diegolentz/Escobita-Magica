import { Provider } from 'react-redux'
import { AppRouter } from './AppRouter'
import { store } from './redux/store' // Asegúrate de importar tu store

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
