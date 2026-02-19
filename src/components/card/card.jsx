import "./card.css";
import { useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

export const Card = ({
    title,
    description,
    price,
    image,
    badge,
    tone,
}) => {
    const [quantityMode, setQuantityMode] = useState(false);
    const [quantity, setQuantity] = useState(0); // Cantidad inicial (puedes manejar esto con estado si quieres que sea dinámico)
    const [total, setTotal] = useState(price); // Total inicial (puedes manejar esto con estado si quieres que sea dinámico)
    const onConunt = () => {
        setQuantityMode(true);
        setQuantity(1);
    };

    const onQuantityChange = (newQuantity) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity);
            setTotal(price * newQuantity);
        } else {
            setQuantity(0);
            setQuantityMode(false);
        }
    };


    return (
        <article className="productoCard">
            <div className={`productoImgWrap ${tone}`}>
                {badge && <span className="productoBadge">{badge}</span>}
                <img src={image} alt={title} className="productoImg" />
            </div>

            <div className="productoBody">
                <h3 className="productoNombre">{title}</h3>

                <div className="descriptionContainer">
                    {/* <p className="productoDesc">{description}</p> */}
                    {description && description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>


                <div className="productoFooter">
                    <span className="productoPrecio">${total.toFixed(2)}</span>

                    {quantityMode ? (

                        <div className="quantityControls">
                            <button className="restarBoton" onClick={() => onQuantityChange(quantity - 1)} >
                                −
                            </button>
                            <span className="contadorCantidad">{quantity}</span>
                            <button className="sumarBoton" onClick={() => onQuantityChange(quantity + 1)}>
                                +
                            </button>
                        </div>
                    ) : (
                        <button className="productoBtnCarrito" aria-label="Agregar al carrito" onClick={() => onConunt()}>
                            <LocalGroceryStoreIcon fontSize="large" />
                        </button>
                    )}
                </div>
                <div className="ContadorTotal">

                </div>



            </div>
        </article>
    );
};