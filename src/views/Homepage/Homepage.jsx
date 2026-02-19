import "./Homepage.css";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/nav/nav";
import { Card } from "../../components/card/card";
import { getProductos } from "../../data/productos";

export const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    cargarProductos();
  }, [productos]);

  // Calcular índices
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosActuales = productos.slice(indicePrimero, indiceUltimo);

  // Total de páginas
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

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
        <div className="productos">
          {productosActuales.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>

        {/* Paginación */}
        <div className="paginacion">
          <button
            className="btnPaginacion"
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            ← Anterior
          </button>

          <div className="numerosPagina">
            {[...Array(totalPaginas)].map((_, index) => (
              <button
                key={index + 1}
                className={`btnNumero ${paginaActual === index + 1 ? 'activo' : ''}`}
                onClick={() => cambiarPagina(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="btnPaginacion"
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente →
          </button>
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