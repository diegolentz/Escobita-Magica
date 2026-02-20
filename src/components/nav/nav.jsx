import './nav.css'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Button from '@mui/material/Button';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
                <CleaningServicesIcon onClick={handleBackClick} sx={{ fontSize: 25, fill: 'white', backgroundColor: 'var(--Rojo)', padding: '0.8rem', borderRadius: '1rem', cursor: 'pointer' }} />
                <h2 onClick={handleBackClick} style={{ cursor: 'pointer' }}>Escobita Mágica</h2>
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
                        borderRadius: '1rem',
                        px: 2,
                        py: 0.5,
                        backgroundColor: 'var(--Rojo)',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        '&:hover': {
                            cursor: 'pointer'
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
                        <>
                            <ArrowBackIcon sx={{ fontSize: 26, color: 'inherit' }} />
                            Volver
                        </>
                    )}
                </Button>
            </div>
        </nav>
    )
}