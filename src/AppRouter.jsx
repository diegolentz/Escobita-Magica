import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartPage } from './views/CartPage/cartpage'
import { HomePage } from './views/Homepage/Homepage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
