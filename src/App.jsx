import { Provider } from 'react-redux'
import { AppRouter } from './AppRouter'
import { store } from './redux/store' // Asegúrate de importar tu store
import { useEffect } from 'react'
import { loadFromSession } from './redux/slices/carritoSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Esto carga el carrito del storage apenas arranca la app
    dispatch(loadFromSession());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
