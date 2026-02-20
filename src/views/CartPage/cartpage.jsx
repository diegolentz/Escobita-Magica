import './cartpage.css';
import { NavBar } from "../../components/nav/nav";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromSession } from '../../redux/slices/carritoSlice';
import { updateCart } from '../../redux/slices/carritoSlice';
import DoneIcon from '@mui/icons-material/Done';

export const CartPage = () => {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.carrito.productos);


    const onQuantityChange = (p) => {
        dispatch(updateCart({
            id : p.id,
            imagen : p.imagen,
            titulo: p.titulo,
            descripcion: p.descripcion,
            precioUnitario: p.precioUnitario,
            cantidad: p.cantidad,
        }));


    };

    useEffect(() => {
        dispatch(loadFromSession());
    }, [dispatch]);

    return (
        <>
            <NavBar></NavBar>
            <div className="imgEscobita">
                <img className="imgLogo" src="/logo.png" alt="Escobita Mágica Logo" />
            </div>
            <section className="descripcion">
                <h1>Revisa tu carrito de compras y hace los ajustes necesarios</h1>
                <div className="descripcionBeneficios">
                    <span className="beneficio beneficioPrincipal">
                        🚚 Envíos sin cargo desde $25.000
                    </span>
                    <span className="beneficio beneficioPrincipal">📍 Envíos solo en GBA</span>
                </div>
            </section>

            <section className="productosContainerCaarrito">
                {productos.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <p style={{ fontSize: '2.5rem', color: '#ff9800', fontWeight: 'bold', marginBottom: '20px' }}>Tu carrito está vacío</p>
                        <button 
                            onClick={() => window.location.href = '/'}
                            style={{
                                padding: '12px 30px',
                                fontSize: '1.5rem',
                                backgroundColor: '#ff9800',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Seleccionar productos
                        </button>
                    </div>
                ) : (
                    <div className="productosCarrito">
                        {productos.map((p) => (
                            <div key={p.id} className="productoCarrito">
                                <div className='imgTitulo'>
                                    <img className='imagenCarrito' src={p.imagen} alt={p.titulo} />
                                    <h3>{p.titulo}</h3>
                                </div>
                                <div className='tipografiaCarrito'>
                                    {p.descripcion.map((desc, index) => (
                                        <p key={index}><DoneIcon  style={{marginRight: '8px', color: 'green', fontSize: '1.8rem', fontWeight: 'bold'}} />{desc}</p>
                                    ))}
                                </div>
                                <p className='tipografiaCarrito'>Precio unitario: ${p.precioUnitario}</p>
                                <div className="quantityControls">
                                    <button className="productoBtnCarrito"  onClick={() => onQuantityChange({...p, cantidad: p.cantidad - 1})}>−</button>
                                    <span>{p.cantidad}</span>
                                    <button className="productoBtnCarrito" onClick={() => onQuantityChange({...p, cantidad: p.cantidad + 1})}>+</button>
                                </div>
                                <p className='subtotalCarrito'>Subtotal: <span>${p.precioUnitario * p.cantidad}</span></p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
             <footer className="footerEscobita">
        <div className="footerContent">
            <div className="footerSection">
                <h3>Escobita Mágica</h3>
                <p>Productos de limpieza de calidad a tu puerta</p>
            </div>

            <div className="footerSection">
                <h3>Contacto</h3>
                <a href="https://wa.me/541234567890" target="_blank" rel="noopener noreferrer">
                    📱 WhatsApp
                </a>
                <a href="https://instagram.com/escobita.magica" target="_blank" rel="noopener noreferrer">
                    📸 Instagram
                </a>
            </div>

            <div className="footerSection">
                <h3>Métodos de Pago</h3>
                <p>💵 Efectivo</p>
                <p>🏦 Transferencia Bancaria</p>
            </div>

            <div className="footerSection">
                <h3>Entregas</h3>
                <p>📍 Solo en AMBA</p>
            </div>
        </div>

        <div className="footerBottom">
            <p>© 2024 Escobita Mágica. Todos los derechos reservados.</p>
        </div>
    </footer>
        </>
    );
};
