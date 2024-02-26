import { useTranslation } from 'react-i18next'
import './styles/app.css'
import { Link } from "react-router-dom"
import { IoColorFillSharp } from "react-icons/io5"
import { FaScrewdriverWrench } from "react-icons/fa6"
import { FaSackDollar } from "react-icons/fa6"
import { FaUnlink } from "react-icons/fa"

function App() {
  const { t } = useTranslation();

  return (
    <>
      <section id='app-section1'>
        <div className='container'>
          <h1>GRAPHIC GENERATOR</h1>
          <h2>Create your graphic</h2>
          <p className='text-section1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque labore rem soluta magni esse voluptate perspiciatis voluptas impedit adipisci quas minus sed molestias, facere saepe illo excepturi vel dignissimos.</p>
          <div className='buttons-section1'>
            <a href="#app-section3">How To Use?</a>
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
          <div className='hexagon'>
            <FaScrewdriverWrench className='icon-card' />
          </div>

          <div className='card'>
            <div className='text-section2'>
              <h3>Easy To Use</h3>
              <p>This system has been designed with an intuitive interface for ease of use.</p>
            </div>
          </div>

          <div className='hexagon'>
            <IoColorFillSharp className='icon-card' />
          </div>
          <div className='card'>
            <div className='text-section2'>
              <h3>Customizable</h3>
              <p>This graphics system allows for complete customization of colors and styles.</p>
            </div>
          </div>

          <div className='hexagon'>
            <FaSackDollar className='icon-card' />
          </div>
          <div className='card'>
            <div className='text-section2'>
              <h3>Free</h3>
              <p>This service is available free of charge to all users.</p>
            </div>
          </div>

          <div className='hexagon'>
            <FaUnlink className='icon-card' />
          </div>

          <div className='card'>
            <div className='text-section2'>
              <h3>No Dependencies</h3>
              <p>This page does not require external dependencies for its correct functioning.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='app-section3'>
        <div className='titulo'>
          <h2>How to Use</h2>
        </div>


        <div className='step'>
          <h3>1. Descargar JS</h3>
          <Link to="#">Download</Link>
        </div>

        <div className='step'>
          <h3>2. Importar en tu proyecto</h3>
          <p>Importa el archivo JS en tu proyecto.</p>
        </div>

        <div className='step'>
          <h3>3. Personalizar el default</h3>
          <Link to="#">Customize</Link>
          <p>Personaliza la configuración por defecto según tus necesidades.</p>
        </div>


        <div className='step'>
          <h3>4. Llamar a la función</h3>
          <p>Llama a la función en tu código para utilizarla.</p>
        </div>
      </section>

    </>
  )
}

export default App;