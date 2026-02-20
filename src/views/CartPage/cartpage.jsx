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
                    <span className="beneficio">📍 Envíos solo en GBA</span>
                </div>
            </section>

            <section className="productosContainerCaarrito">
                {productos.length === 0 ? (
                    <p>Tu carrito está vacío</p>
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
        </>
    );
};
