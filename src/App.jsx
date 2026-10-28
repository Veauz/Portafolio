import './App.css'

function App() {
  return (
    <>
      <header className="barra">
        <a className="marca" href="#inicio">
          IR<span>.</span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#aprendizajes">Aprendizajes</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="portada">
          <span className="etiqueta">PORTAFOLIO ACADÉMICO · 2026</span>
          <h1>
            Saludos, soy Benjamin
            <br />
            <span>Aprendo creando.</span>
          </h1>

          <p>
            Estudiante de Ingeniería Civil Informática en la Universidad
            Autónoma de Chile, sede Temuco. Aquí comparto mis trabajos
            de Desarrollo de Aplicaciones Web.
          </p>

          <a className="boton" href="#proyectos">
            Explorar proyectos ↗
          </a>

          <div className="datos">
            <span>Benjamin Saldana</span>
            <span>Desarrollo de Aplicaciones Web</span>
            <span>Segundo semestre · 2026</span>
          </div>
        </section>

        <section id="sobre-mi" className="seccion">
          <span className="etiqueta">01 / SOBRE MÍ</span>
          <h2>De la idea al navegador.</h2>

          <p className="descripcion">
            Estoy aprendiendo a construir aplicaciones web y a conectar
            sus interfaces con datos reales. Este portafolio reúne mis
            proyectos.
          </p>

          <div className="tecnologias">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Vercel'].map(
              (tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              )
            )}
          </div>
        </section>

        <section id="proyectos" className="seccion">
          <span className="etiqueta">02 / PROYECTOS</span>
          <h2>Lo que he construido.</h2>

          <article className="proyecto">
            <div className="visual-pokedex" aria-hidden="true">
              <span className="rotulo">REACT + POKEAPI</span>
              <div className="pokebola">
                <div className="centro-pokebola"></div>
              </div>
              <span className="numero-proyecto">PROYECTO / 001</span>
            </div>

            <div className="contenido-proyecto">
              <span className="etiqueta">CONSUMO DE API PÚBLICA</span>
              <h3>Pokédex</h3>

              <p>
                Aplicación que muestra los primeros 30 Pokémon con su
                imagen, nombre, tipo y peso. Incluye búsqueda por nombre
                y mensajes de carga y error.
              </p>

              <div className="tecnologias">
                <span>React</span>
                <span>PokeAPI</span>
                <span>CSS</span>
              </div>

              <div className="detalle">
                <h4>¿Cómo funciona?</h4>
                <p>
                  Consulta la API con fetch dentro de useEffect, guarda
                  los resultados con useState y genera las tarjetas
                  mediante map.
                </p>
              </div>

              <div className="acciones">
                <a
                  className="boton"
                  href="https://pokedex-silk-two-31.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver aplicación ↗
                </a>

                <a
                  className="boton secundario"
                  href="https://github.com/Veauz/Pokedex-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código ↗
                </a>
              </div>
            </div>
          </article>

          <article className="proyecto proyecto-mercagaming">
            <div className="visual-gaming" aria-hidden="true">
              <span className="rotulo">TIENDA DE VIDEOJUEGOS</span>
              <span className="icono-gaming">🎮</span>
              <span className="numero-proyecto">PROYECTO / 002</span>
            </div>

            <div className="contenido-proyecto">
              <span className="etiqueta">TIENDA WEB</span>
              <h3>MercaGaming</h3>

              <p>
                Proyecto de tienda de videojuegos con catálogo,
                carrito de compras y favoritos. Permite seleccionar
                juegos y revisar el total de los productos agregados.
              </p>

              <div className="tecnologias">
                <span>React</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
              </div>

              <div className="detalle">
                <h4>¿Qué aprendí?</h4>
                <p>
                  Practiqué la organización de la interfaz en componentes,
                  el manejo de estados para el carrito y los favoritos,
                  y el cálculo del total de la compra.
                </p>
              </div>

              <div className="acciones">
                <a
                  className="boton"
                  href="https://merca-gaming-t6px.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver aplicación ↗
                </a>

                <a
                  className="boton secundario"
                  href="https://github.com/Veauz/MercaGaming"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código ↗
                </a>
              </div>
            </div>
          </article>
        </section>

        <section id="aprendizajes" className="seccion">
          <span className="etiqueta">03 / APRENDIZAJES</span>
          <h2>Lo que me llevo del proyecto.</h2>

          <div className="aprendizajes">
            <article className="tarjeta">
              <span className="numero">01</span>
              <h3>Consumir una API</h3>
              <p>
                Aprendí a solicitar información con fetch, convertir la
                respuesta a JSON y utilizar esos datos en la interfaz.
              </p>
            </article>

            <article className="tarjeta">
              <span className="numero">02</span>
              <h3>Trabajar con React</h3>
              <p>
                Practiqué el uso de estados y efectos para cargar datos
                y actualizar la lista al escribir en el buscador.
              </p>
            </article>

            <article className="tarjeta">
              <span className="numero">03</span>
              <h3>Publicar una aplicación</h3>
              <p>
                Subí el código a GitHub y conecté el repositorio con
                Vercel para compartir la aplicación mediante un enlace.
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>Benjamin Saldana · Portafolio académico · 2026</p>
        <a
          href="https://github.com/Veauz"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </>
  )
}

export default App