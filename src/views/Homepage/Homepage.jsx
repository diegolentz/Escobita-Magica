import "./Homepage.css";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/nav/nav";
import { Card } from "../../components/card/card";
import { getProductos } from "../../data/productos";

const productos = [
    {
        title: "Detergente Premium",
        description: "Limpieza profunda y aroma floral duradero para todas tus prendas.",
        price: 12.5,
        image: "/detergente.jpg",
        badge: "Nuevo",
        tone: "gold",
        quantityMode: false,
    },
    {
        title: "Desinfectante Multi",
        description: "Elimina el 99.9% de bacterias con fragancia de cítricos frescos.",
        price: 8,
        image: "/desinfectante.jpg",
        tone: "green",
        quantityMode: true,
        quantity: 1,
    }
    ,
    {
        title: "Desinfectante Multi",
        description: "Elimina el 99.9% de bacterias con fragancia de cítricos frescos.",
        price: 8,
        image: "/desinfectante.jpg",
        tone: "green",
        quantityMode: true,
        quantity: 1,
    }
    ,
    {
        title: "Desinfectante Multi",
        description: "Elimina el 99.9% de bacterias con fragancia de cítricos frescos.",
        price: 8,
        image: "/desinfectante.jpg",
        tone: "green",
        quantityMode: true,
        quantity: 1,
    }
    ,
    {
        title: "Desinfectante Multi",
        description: "Elimina el 99.9% de bacterias con fragancia de cítricos frescos.",
        price: 8,
        image: "/desinfectante.jpg",
        tone: "green",
        quantityMode: true,
        quantity: 1,
    }
    ,
    {
        title: "Desinfectante Multi",
        description: "Elimina el 99.9% de bacterias con fragancia de cítricos frescos.",
        price: 8,
        image: "/desinfectante.jpg",
        tone: "green",
        quantityMode: true,
        quantity: 1,
    }
]

export const HomePage = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };

    cargarProductos();
  }, []);

  return (
    <>
      <NavBar />
      <div className="imgEscobita">
        <img className="imgLogo" src="/logo.png" alt="Escobita Mágica Logo" />
      </div>
      <section className="descripcion">
        <h1>Productos de limpieza en la puerta de tu casa</h1>
        <h2 className="descripcionLead">
          Comprá desde la comodidad de tu hogar y nosotros te lo llevamos.
        </h2>

        <div className="descripcionBeneficios">
          <span className="beneficio beneficioPrincipal">🚚 Envíos sin cargo desde $25.000</span>
          <span className="beneficio">📍 Envíos solo en GBA</span>
        </div>
      </section>
      <section className="productosContainer">
        <h2 className="titleContainerProductos">Nuestros Combos</h2>
        <h3 className="titleContainerProductos">Preciona el carrito y eleji la cantidad, cuando tengas lo que necesitas presiona continuar con la compra</h3>
        <div className="productos">
          {productos.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
        
        <div className="checkoutSection">
          <button className="btnContinuar">
            Continuar con la compra
          </button>
        </div>
      </section>
      <footer>

      </footer>
    </>
  );
};