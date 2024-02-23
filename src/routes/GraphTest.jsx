import '../styles/graphTest.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';
import generateGraph from '../scripts/graphGenerator.js';

export default function GraphTest() {
    const { t } = useTranslation();
    const [graphData, setGraphData] = useState({
        canvasProps: {
            id: 'canvas1',
            maxWidth: 400,
            height: 200,
        },
        values: [40, 80, 70, 50, 100, 40, 92, 70, 120],
        color: '#FB5350',
        scaleMarks: 6,
        limitNums: 2,
        circles: false,
    });

    const changeGraphWidth = (event) => {
        const { value } = event.target;
        setGraphData(prevState => ({
            ...prevState,
            canvasProps: {
                ...prevState.canvasProps,
                maxWidth: value
            }
        }));
    };

    const changeGraphHeigh = (event) => {
        const { value } = event.target;
        setGraphData(prevState => ({
            ...prevState,
            canvasProps: {
                ...prevState.canvasProps,
                height: value
            }
        }));
    };

    const changeGraphColor = (event) => {
        const { value } = event.target;
        setGraphData(prevState => ({
            ...prevState,
            color: value
        }));
    };

    const changeGraphMarks = (event) => {
        const { value } = event.target;
        setGraphData(prevState => ({
            ...prevState,
            scaleMarks: value
        }));
    };

    const changeGraphCircles = (event) => {
        const { value } = event.target;
        setGraphData(prevState => ({
            ...prevState,
            circles: value === 'true'
        }));
    };

    useEffect(() => {
        generateGraph(graphData);
    }, [graphData]);

    return (
        <>
            <h1>{t('titleTest')}</h1>

            <section id='test-section'>
                <div>
                    <label htmlFor="graph_width">Width</label>
                    <input type="number" name='graph_width' id='graph_width' className='test-input'
                        onChange={changeGraphWidth} />
                </div>

                <div>
                    <label htmlFor="graph_height">Height</label>
                    <input type="number" name='graph_height' id='graph_height' className='test-input'
                        onChange={changeGraphHeigh} />
                </div>

                <div>
                    <label htmlFor="graph-color">Color</label>
                    <input type="color" name='graph-color' id='graph-color' className='test-input'
                        onChange={changeGraphColor} />
                </div>

                <div>
                    <label htmlFor="graph-scaleMarks">Scale marks</label>
                    <input type="number" name='graph-scaleMarks' id='graph-scaleMarks' className='test-input' 
                        onChange={changeGraphMarks}/>
                </div>

                <div className="radio-input">
                    <label htmlFor="">Circles</label>
                    <input name="style-radio" type="radio" className="graph-style"
                        value="true" onChange={changeGraphCircles} />
                    <input name="style-radio" type="radio" className="graph-style"
                        value="false" onChange={changeGraphCircles} />
                </div>
            </section>

            <section id='graph-section'>

                <div id='canvas1-container' className="graph-container">
                    <canvas id="canvas1"></canvas>
                </div>

            </section>
        </>
    )
}