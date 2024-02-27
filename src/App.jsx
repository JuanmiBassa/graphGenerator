import { useTranslation } from 'react-i18next'
import './styles/app.css'
import { Link } from "react-router-dom"
import { IoColorFillSharp } from "react-icons/io5"
import { FaScrewdriverWrench } from "react-icons/fa6"
import { FaSackDollar } from "react-icons/fa6"
import { FaUnlink } from "react-icons/fa"
import { useState } from 'react'
import frontPageImg from './assets/frontpage.png'

function App() {
  const [activeSteps, setActiveSteps] = useState(1);
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

          <div className='frontPage'>
            <img src={frontPageImg} alt="" />
          </div>
        </div>
      </section>

      <section id='app-section2'>
        <div className='titulo'>
          <h2>We Believe in Graphics</h2>
        </div>

        <div className='card-container'>
          <div className='card'>
            <div className='hexagon' id='hex1'>
              <FaScrewdriverWrench className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>Easy To Use</h3>
              <p>This system has been designed with an intuitive interface for ease of use.</p>
            </div>
          </div>



          <div className='card'>
            <div className='hexagon' id='hex2'>
              <IoColorFillSharp className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>Customizable</h3>
              <p>This graphics system allows for complete customization of colors.</p>
            </div>
          </div>

          <div className='card'>
            <div className='hexagon' id='hex3'>
              <FaSackDollar className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>Free</h3>
              <p>This service is available free of charge to all users.</p>
            </div>
          </div>


          <div className='card'>
            <div className='hexagon' id='hex4'>
              <FaUnlink className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>No Dependencies</h3>
              <p>This page does not require external dependencies for its correct functioning.</p>
            </div>
          </div>


        </div>
      </section>


      <section id='app-section3'>
        <h1>How To Use</h1>
        <h2>Learn the code only in four steps</h2>
        <div>
          <div id='buttons-section3'>
            <button className='steps' onClick={() => setActiveSteps(1)}>1.Download JS</button>
            <button className='steps' onClick={() => setActiveSteps(2)}>2.Import Your Project</button>
            <button className='steps' onClick={() => setActiveSteps(3)}>3.Customize the default object</button>
            <button className='steps' onClick={() => setActiveSteps(4)}>4.Call global function</button>
          </div>

          <div className='steps'>
            {activeSteps == 1 && <div></div>}
            {activeSteps == 2 && <div></div>}
            {activeSteps == 3 && <div></div>}
            {activeSteps == 4 && <div></div>}
          </div>
        </div>


      </section>

    </>
  )
}

export default App;