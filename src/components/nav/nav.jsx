import './nav.css'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const nav = useNavigate();
    const location = useLocation();
    const isHome = location.pathname === '/';

    const handleCarritoClick = () => {
        nav('/carrito');
    };
    const handleBackClick = () => {
        nav('/');
    };

    return (
        <nav className="NavBar">
            <div className="navIzquierda">
                {/* icono */}
                <CleaningServicesIcon sx={{ fontSize: 30, fill: 'white', backgroundColor: 'var(--Rojo)', padding: '0.5rem', borderRadius: '1rem'}} />
                <h2>Escobita Mágica</h2>
            </div>
            <div className="navDerecha">
                <Button
                    variant="contained"
                    disableElevation
                    sx={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textTransform: 'none',
                        borderRadius: '0 18px 0 18px',
                        px: 2,
                        py: 0.5,
                        backgroundColor: 'var(--RojoSombreado)',
                        color: 'var(--Rojo)',
                        fontWeight: 'bold',
                        fontSize: '1.8rem',
                        '&:hover': {
                            backgroundColor: '#EFD7CA'
                        }
                    }}
                    onClick={isHome ? handleCarritoClick : handleBackClick}
                >
                    {isHome ? (
                        <>
                            <LocalGroceryStoreIcon sx={{ fontSize: 26, color: 'inherit' }} />
                            Carrito
                        </>
                    ) : (
                        'Volver'
                    )}
                </Button>
            </div>
        </nav>
    )
}