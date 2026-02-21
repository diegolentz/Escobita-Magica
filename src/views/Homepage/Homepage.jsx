import "./Homepage.css";
import { useEffect, useState } from "react";
import { NavBar } from "../../components/nav/nav";
import { Card } from "../../components/card/card";
import { getProductos } from "../../data/productos";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState(null);
  const productosPorPagina = 10;

  const nav = useNavigate();

  const handleContinuarCompra = () => {
    nav('/carrito');
  }

  useEffect(() => {
    const cargarProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    cargarProductos();
  }, []);

  // Calcular índices
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  
  // Si hay búsqueda, usar resultados; si no, usar todos los productos
  const listaProductos = resultadosBusqueda !== null ? resultadosBusqueda : productos;
  const productosActuales = listaProductos.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const handleBusqueda = () => {
    if (!busqueda.trim()) {
      setResultadosBusqueda(null);
      setPaginaActual(1);
      return;
    }

    const palabras = busqueda.toLowerCase().split(" ");
    const filtrados = productos.filter((producto) => {
      // Si description es array, convertirlo a string
      let descripcion = producto.description;
      if (Array.isArray(descripcion)) {
        descripcion = descripcion.join(" ");
      }
      descripcion = (descripcion || "").toLowerCase();
      
      const titulo = (producto.title || "").toLowerCase();
      
      return palabras.some(
        (palabra) => descripcion.includes(palabra) || titulo.includes(palabra)
      );
    });

    console.log("Productos encontrados:", filtrados);
    setResultadosBusqueda(filtrados);
    setPaginaActual(1);
  };

  const handleLimpiar = () => {
    setBusqueda("");
    setResultadosBusqueda(null);
    setPaginaActual(1);
  };

  return (
    <>
      <NavBar />
      <div className="imgEscobita">
        <img className="imgLogo" src="/logo.png" alt="Escobita Mágica Logo" />
      </div>

      <section className="descripcion">
        <h1>Productos de limpieza en la puerta de tu casa</h1>
        <h2 className="descripcionLead beneficio beneficioPrincipal">
          Comprá desde la comodidad de tu hogar y nosotros te lo llevamos.
        </h2>

        <div className="descripcionBeneficios">
          <span className="beneficio beneficioPrincipal">
            🚚 Envíos sin cargo desde $24.500
          </span>
          <span className="beneficio beneficioPrincipal">📍 Envíos solo en GBA</span>
        </div>
      </section>

      <section className="productosContainer">
        <h2 className="titleContainerProductos">Nuestros Combos y Productos</h2>

        <div className="buscadorContainer">
          <div className="buscadorWrapper">
            <input
              type="text"
              className="inputBusqueda"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleBusqueda()}
            />
            <button className="btnBusqueda" onClick={handleBusqueda}>
              <SearchIcon fontSize="large"  />
              Buscar
            </button>
            {resultadosBusqueda !== null && (
              <button className="btnLimpiar" onClick={handleLimpiar}>
                Limpiar
              </button>
            )}
          </div>
          {resultadosBusqueda !== null && (
            <p className="resultadosBusqueda">
              Se encontraron {resultadosBusqueda.length} producto(s)
            </p>
          )}
        </div>

        <div className="productos">
          {productosActuales.length > 0 && (
            productosActuales.map((p) => <Card key={p.id} {...p} />)
          )}
        
        </div>

        {totalPaginas > 1 && (
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
                  className={`btnNumero ${
                    paginaActual === index + 1 ? "activo" : ""
                  }`}
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
        )}

        <div className="checkoutSection">
          <button className="btnContinuar" onClick={handleContinuarCompra}>Continuar con la compra</button>
        </div>
      </section>

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