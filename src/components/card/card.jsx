import "./card.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { updateCart } from "../../redux/slices/carritoSlice";
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoneIcon from '@mui/icons-material/Done';

export const Card = ({
    id,
    title,
    description,
    price,
    image,
    badge,
    tone,
}) => {
    const dispatch = useDispatch();
    const [quantityMode, setQuantityMode] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const onClickCarrito = () => {
        setQuantityMode(true);
        setQuantity(1);
        dispatch(updateCart({
            id,
            titulo: title,
            descripcion: description,
            precioUnitario: price,
            cantidad: 1,
        }));
    };

    const onQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
        dispatch(updateCart({
            id,
            titulo: title,
            descripcion: description,
            precioUnitario: price,
            cantidad: newQuantity,
        }));

        if (newQuantity < 1) {
            setQuantityMode(false);
            setQuantity(1);
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
                    {description && description.map((item, index) => (
                        <p key={index}><DoneIcon  style={{marginRight: '8px', color: 'green', fontSize: '1.8rem', fontWeight: 'bold'}} />{item}</p>
                    ))}
                </div>

                <div className="productoFooter">
                    <span className="productoPrecio">${(price * quantity).toFixed(2)}</span>

                    {quantityMode ? (
                        <div className="quantityControls">
                            <button className="productoBtnCarrito" onClick={() => onQuantityChange(quantity - 1)}>−</button>
                            <span>{quantity}</span>
                            <button className="productoBtnCarrito" onClick={() => onQuantityChange(quantity + 1)}>+</button>
                        </div>
                    ) : (
                        <button className="productoBtnCarrito" onClick={onClickCarrito}>
                            <LocalGroceryStoreIcon fontSize="large" />
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};