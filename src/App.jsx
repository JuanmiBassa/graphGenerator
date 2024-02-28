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
import step2Img from './assets/step2.jpg'
import step3Img from './assets/step3.jpg'
import step4Img from './assets/step4.jpg'


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
        <h1 id='principalTitle'>{t('titleApp')}</h1>
        <div id='section1-container'>
          <div>
            <h2>{t('subtitleApp')}</h2>
            <p className='text-section1'>{t('textFirstSection')}</p>
            <div className='buttons-section1'>
              <Link id='proveIt' className='default-button' to="/demo">{t('textButton1')}</Link>
              <a id='howToUse' href="#app-section3">{t('textButton2')}</a>
            </div>
          </div>

          <div id='frontPage-container'>
            <div id='frontPage'></div>
            <img src={frontPageImg} alt="" />
          </div>

        </div>
      </section>

      <section id='app-section2' tabIndex="0">
        <div className='titulo'>
          <h2>{t('title2App')}</h2>
        </div>

        <div className='card-container'>
          <div className='card'>
            <div className='hexagon' id='hex1'>
              <FaScrewdriverWrench className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>{t('easyTitle')}</h3>
              <p>{t('easyText')}</p>
            </div>
          </div>

          <div className='card'>
            <div className='hexagon' id='hex2'>
              <IoColorFillSharp className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>{t('customizeTitle')}</h3>
              <p>{t('customizeText')}</p>
            </div>
          </div>

          <div className='card'>
            <div className='hexagon' id='hex3'>
              <FaSackDollar className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>{t('freeTitle')}</h3>
              <p>{t('freeText')}</p>
            </div>
          </div>

          <div className='card'>
            <div className='hexagon' id='hex4'>
              <FaUnlink className='icon-card' />
            </div>
            <div className='text-section2'>
              <h3>{t('dependenciesTitle')}</h3>
              <p>{t('dependenciesText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id='app-section3'>
        <h1>{t('title3App')}</h1>
        <div>
          <div id='buttons-section3'>
            <button className='steps-button' onClick={() => setActiveSteps(1)}>
              <p>{t('step1Title')}</p>
              {activeSteps == 1 && <p>{t('step1Text')}</p>}
              {activeSteps == 1 && <a className='default-button' href="./graphGenerator.js" download='graphGenerator.js'>Download JS</a>}
            </button>

            <button className='steps-button' onClick={() => setActiveSteps(2)}>
              <p>{t('step2Title')}</p>
              {activeSteps == 2 && <p>{t('step2Text')}</p>}
            </button>

            <button className='steps-button' onClick={() => setActiveSteps(3)}>
              <p>{t('step3Title')}</p>
              {activeSteps == 3 && <p>{t('step3Text')}</p>}
              {activeSteps == 3 && <Link className='default-button' to="/demo">Get Code</Link>}

            </button>

            <button className='steps-button' onClick={() => setActiveSteps(4)}>
              <p>{t('step4Title')}</p>
              {activeSteps == 4 && <p>{t('step4Text')}</p>}
            </button>
          </div>

          <div className='steps'>
            {activeSteps == 1 &&
              <img src={step1Img} alt="Img step 1" />
            }
            {activeSteps == 2 &&
              <img src={step2Img} alt="Img step 2" />
            }
            {activeSteps == 3 &&
              <img src={step3Img} alt="Img step 3" />
            }
            {activeSteps == 4 &&
              <img src={step4Img} alt="Img step 4" />
            }
          </div>
        </div>

      </section>

    </>
  )
}

export default App;