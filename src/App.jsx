import { useTranslation } from 'react-i18next'
import './styles/app.css'
import { Link } from "react-router-dom"
import { MdPersonAddAlt1 } from "react-icons/md"


function App() {
  const { t } = useTranslation();

  return (
    <>
      <section id='app-section1'>
        <div>
          <h1>GENERADOR DE GRAFICAS</h1>
          <h2>Crea tu propia grafica</h2>
          <p className='text-section1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque labore rem soluta magni esse voluptate perspiciatis voluptas impedit adipisci quas minus sed molestias, facere saepe illo excepturi vel dignissimos.</p>
          <div className='buttons-section1'>
            <Link to="#app-section-howToUse">How To Use?</Link>
            <Link to="/graph-test">Prove it</Link>
          </div>
        </div>

        <div>
          <div id='burbuja1'>
            <div id='burbuja2'>
            </div>
          </div>
        </div>
      </section>

      <section id='app-section2'>
        <div className='titulo'>
          <h2>We Believe in Graphics</h2>
        </div>

        <div className='card-container'>
          <div className='card'>
            <div className='fondo-icon' id='burbuja3'>
              <MdPersonAddAlt1 className='icon-card' />
            </div>

            <h3>Client </h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Non natus accusamus officia porro</p>
          </div>

          <div>
            <div className='card'>
              <h3>Advantatges</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Non natus accusamus officia porro</p>

            </div>

            <div className='card'>
              <h3>Graphics</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Non natus accusamus officia porro</p>

            </div>
          </div>

          <div className='card'>
            <h3>Percentatges</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Non natus accusamus officia porro</p>
          </div>
        </div>

      </section>

    </>
  )
}

export default App;