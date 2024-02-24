import { useTranslation } from 'react-i18next'
import './styles/app.css'
import { Link } from "react-router-dom"
import { FaUsers } from "react-icons/fa"
import { IoBarChartSharp } from "react-icons/io5"
import { IoIosColorPalette } from "react-icons/io"
import { GiResize } from "react-icons/gi"
import { ImListNumbered } from "react-icons/im"


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
              <FaUsers className='icon-card' />
            </div>

            <div className='text-section2'>
              <h3>Client </h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Non natus accusamus officia porro</p>
            </div>

          </div>

          <div>
            <div className='card'>
              <div className='fondo-icon' id='burbuja4'>
                <FaUsers className='icon-card' />
              </div>

              <div className='text-section2'>
                <h3>Advantatges</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Non natus accusamus officia porro</p>
              </div>
            </div>

            <div className='card'>
              <div className='fondo-icon' id='burbuja5'>
                <IoBarChartSharp className='icon-card' />
              </div>

              <div className='text-section2'>
                <h3>Charts</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Non natus accusamus officia porro</p>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='fondo-icon' id='burbuja6'>
              <FaUsers className='icon-card' />
            </div>

            <div className='text-section2'>
              <h3>Percentatges</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Non natus accusamus officia porro</p>
            </div>
          </div>
        </div>
      </section>

      <section id='app-section3'>
        <div className='titulo'>
          <h3>CHARACTERISTICS</h3>
        </div>

        <div className='characteristics-container'>
          <div className='characteristics'>
            <div className='icon-char'>
              <GiResize id='icon-char1'/>
            </div>

            <div className='title-char'>
              <h4>CHOOSE THE SIZE</h4>
              <p>Customize the size of your graphics to fit your presentation needs.</p>
            </div>
          </div>

          <div className='characteristics'>
            <div className='icon-char'>
              <IoIosColorPalette id='icon-char2' />
            </div>

            <div className='title-char'>
              <h4>CUSTOMIZE THE COLOR</h4>
              <p>Bring your charts to life with custom colors that highlight your data effectively.</p>
            </div>

          </div>

          <div className='characteristics'>
            <div className='icon-char'>
              <ImListNumbered id='icon-char3'/>
            </div>

            <div className='title-char'>
              <h4>SELECT SCALE MARKS</h4>
              <p>Adjust the scales of your graphs for a clear and accurate presentation of your data.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App;