export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                {/* <Route path='/carrito' element={<CarritoPage />} /> */}

                <Route path="" element={<Navigate to="/" />}></Route>
                <Route path="*" element={<Navigate to="/" />}></Route>
            </Routes>
        </BrowserRouter>
    )
}