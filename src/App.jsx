import { useTranslation } from 'react-i18next'
import './styles/app.css'
import { Link } from "react-router-dom"
import { IoColorFillSharp } from "react-icons/io5"
import { FaScrewdriverWrench } from "react-icons/fa6"
import { FaSackDollar } from "react-icons/fa6"
import { FaUnlink } from "react-icons/fa"
import { useState, useEffect } from 'react'
import frontPageImg from './assets/frontpage.png'
import step1Img from './assets/step1.jpg'

function App() {
  const [activeSteps, setActiveSteps] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    const stepButtons = document.querySelectorAll('.steps-button');
    stepButtons.forEach((button, index) => {
      if (index == activeSteps - 1) {
        button.classList.add('focushed');
      } else {
        button.classList.remove('focushed');
      }
    })
  }, [activeSteps]);

  return (
    <>
      <section id='app-section1'>
        <h1>GRAPH GENERATOR</h1>
        <div id='section1-container'>
          <div>
            <h2>Create your graph</h2>
            <p className='text-section1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, neque labore rem soluta magni esse voluptate perspiciatis voluptas impedit adipisci quas minus sed molestias, facere saepe illo excepturi vel dignissimos.</p>
            <div className='buttons-section1'>
              <Link className='default-button' to="/graph-test">Prove it</Link>
              <a id='howToUse' href="#app-section3">How To Use?</a>
            </div>
          </div>

          <div id='frontPage-container'>
            <div id='frontPage'></div>
            <img src={frontPageImg} alt="" />
          </div>

        </div>
      </section>

      <section id='app-section2'>
        <div className='titulo'>
          <h2>ADVANTAGES</h2>
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
        <div>
          <div id='buttons-section3'>
            <button className='steps-button' onClick={() => setActiveSteps(1)}>
              <p>1.Download JS</p>
              {activeSteps == 1 && <p>To start using our application, download the necessary JavaScript files. These files contain the core functionality required for generating graphics dynamically.</p>}
              {activeSteps == 1 && <a className='default-button' href="src/scripts/graphGenerator.js" download='graphGenerator.js'>Download JS</a>}
            </button>

            <button className='steps-button' onClick={() => setActiveSteps(2)}>
              <p>2.Import Your Project</p>
              {activeSteps == 2 && <p>Link the files to your HTML.</p>}
            </button>

            <button className='steps-button' onClick={() => setActiveSteps(3)}>
              <p>3.Customize the default object</p>
              {activeSteps == 3 && <p>Adjust the code to your needs.</p>}
            </button>

            <button className='steps-button' onClick={() => setActiveSteps(4)}>
              <p>4.Call global function</p>
              {activeSteps == 4 && <p>Utilize globally available functions.</p>}
            </button>
          </div>

          <div className='steps'>
            {activeSteps == 1 &&
              <img src={step1Img} alt="" />
            }
            {activeSteps == 2 &&
              <img src={step1Img} alt="" />
            }
            {activeSteps == 3 &&
              <img src={step1Img} alt="" />
            }
            {activeSteps == 4 &&
              <img src={step1Img} alt="" />
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default App;