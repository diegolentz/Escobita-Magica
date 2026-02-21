import './cartpage.css';
import { NavBar } from "../../components/nav/nav";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromSession } from '../../redux/slices/carritoSlice';
import { updateCart } from '../../redux/slices/carritoSlice';
import DoneIcon from '@mui/icons-material/Done';
import { selectTotal } from '../../redux/slices/carritoSlice';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export const CartPage = () => {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.carrito.productos);
    const total = useSelector(selectTotal);

    const [openConfirm, setOpenConfirm] = useState(false);


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

    const handleOpenConfirm = () => {
        if (productos.length === 0) return;
        setOpenConfirm(true);
    };

    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };

    const handleConfirmWhatsApp = () => {
        const numeroWhatsApp = '541121556231';
        const totalTransferencia = total * 1.2;

        const itemsTexto = productos.map((p) => {
            const subtotal = p.precioUnitario * p.cantidad;
            const descripcionTexto = Array.isArray(p.descripcion)
                ? p.descripcion.join(' | ')
                : p.descripcion;

            return `- ${p.titulo} x ${p.cantidad}\nContiene: ${descripcionTexto}\nSubtotal: $${subtotal}`;
        }).join('\n\n');

        const mensaje =
            'Hola Escobita Mágica! Quiero confirmar el siguiente pedido:\n\n' +
            itemsTexto +
            `\n\nTotal en efectivo/contado: $${total}` +
            `\nTotal con transferencia: $${totalTransferencia}` +
            '\n\nPor favor confirmame forma de pago y lugar de entrega.';

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        setOpenConfirm(false);
        window.location.href = url;
    };

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
                { productos.length > 0 && (

                    <div className="resumenCompra">
                    <h2 className=''>Total al Contado = ${total}</h2>
                    <h2>Total con transferencia = ${total *1.2}</h2>
                    <button className="btnConfirmarPedido" onClick={handleOpenConfirm}>Confirmar Pedido</button>
                </div>)
                }
            </section>

            <Dialog open={openConfirm} onClose={handleCloseConfirm} fullWidth maxWidth="xs">
                <DialogTitle>Confirmar pedido</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ mt: 1.5 }}>
                        Te vamos a redirigir a WhatsApp para continuar con la compra,
                        elegir método de pago y coordinar el lugar de entrega.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                        ¿Querés confirmar el pedido?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm} color="inherit">
                        Cancelar
                    </Button>
                    <Button onClick={handleConfirmWhatsApp} variant="contained" color="success">
                        Sí, confirmar
                    </Button>
                </DialogActions>
            </Dialog>
             <footer className="footerEscobita">
        <div className="footerContent">
            <div className="footerSection">
                <h3>Escobita Mágica</h3>
                <p>Productos de limpieza de calidad a tu puerta</p>
            </div>

            <div className="footerSection">
                <h3>Contacto</h3>
                <a href="https://wa.me/541121556231" target="_blank" rel="noopener noreferrer">
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
