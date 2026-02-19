import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HomePage } from './views/Homepage/Homepage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/carrito" element={<CarritoPage />} /> */}
        <Route path="" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
