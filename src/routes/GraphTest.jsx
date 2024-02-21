import '../styles/graphTest.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import generateGraph from '../scripts/graphGenerator.js';

export default function GraphTest() {
    const { t } = useTranslation();
    const [selectedValue, setSelectedValue] = useState('');

    const handleInputChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        const dataGraph1 = {
            canvasProps: {
                id: 'canvas1',
                maxWidth: 400,
                height: 200,
            },
            values: [40, 80, 70, 50, 100, 40, 92, 70, 120],
            color: '#FB5350',
            scaleMarks: 5,
            limitNums: 10,
            circles: false,
        }

        generateGraph(dataGraph1);
    }, []);

    return (
        <>
            <h1>{t('titleTest')}</h1>

            <section id='test-section'>
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
                        value="1" onChange={handleInputChange} />
                    <input name="style-radio" type="radio" className="graph-style"
                        value="2" onChange={handleInputChange} />
                    <input name="style-radio" type="radio" className="graph-style"
                        value="3" onChange={handleInputChange} />
                </div>
                <p>Selected Value: {selectedValue}</p>

            </section>

            <section id='graph-section'>

                <div className="graph_container">
                    <canvas id="canvas1"></canvas>
                </div>

            </section>
        </>
    )
}