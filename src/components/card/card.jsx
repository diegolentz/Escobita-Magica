import "./card.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { updateCart } from "../../redux/slices/carritoSlice";
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DoneIcon from '@mui/icons-material/Done';
import { selectCantidadPorId } from "../../redux/slices/carritoSlice";

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
    const quantityStorage = useSelector((state) => selectCantidadPorId(state, id));

    const onClickCarrito = () => {
        setQuantityMode(true);
        setQuantity(1);
        dispatch(updateCart({
            id,
            imagen : image,
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
            imagen : image,
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

    useEffect(() => {
        if (quantityStorage > 0) {
            setQuantityMode(true);
            setQuantity(quantityStorage);
        } else {
            setQuantityMode(false);
            setQuantity(1);
        }
    }, []);

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