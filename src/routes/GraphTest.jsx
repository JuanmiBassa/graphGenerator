import '../styles/graphTest.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react';

export default function GraphTest() {
    const { t } = useTranslation();
    const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

    return (
        <>
            <h1>{t('titleTest')}</h1>

            <section id='test-section' className='neum-container'>
                <div>
                    <label htmlFor="graph_width">Width</label>
                    <input type="text" name='graph_width' id='graph_width' className='test-input' />
                </div>

                <div>
                    <label htmlFor="graph_height">Height</label>
                    <input type="text" name='graph_height' id='graph_height' className='test-input' />
                </div>

                <div className="radio-input">
                    <label htmlFor=""></label>
                    <input name="style-radio" type="radio" className="graph-style" 
                    value="1" onChange={handleInputChange}/>
                    <input name="style-radio" type="radio" className="graph-style" 
                    value="2" onChange={handleInputChange}/>
                    <input name="style-radio" type="radio" className="graph-style" 
                    value="3" onChange={handleInputChange}/>
                </div>
                <p>Selected Value: {selectedValue}</p>

            </section>
        </>
    )
}