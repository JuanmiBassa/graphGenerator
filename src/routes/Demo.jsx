import React from 'react'
import '../styles/demo.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import generateGraph from '../scripts/graphGenerator.js'
import CodeMirrorJS from '../templates/CodeMirrorJS.jsx'
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Demo() {
    const { t } = useTranslation();
    const [graphObject, setGraphObject] = useState({
        canvasProps: {
            id: 'canvas',
            maxWidth: 400,
            height: 200,
        },
        values: [40, 80, 70, 50, 100, 40, 92, 70, 120],
        color: '#FB5350',
        scaleMarks: 6,
        circles: false,
    });
    const [selectedValue, setSelectedValue] = useState();
    const [newValue, setNewValue] = useState();

    const changeGraphWidth = (event) => {
        const { value } = event.target;
        setGraphObject(prevState => ({
            ...prevState,
            canvasProps: {
                ...prevState.canvasProps,
                maxWidth: parseInt(value)
            }
        }));
    };

    const changeGraphHeigh = (event) => {
        const { value } = event.target;
        setGraphObject(prevState => ({
            ...prevState,
            canvasProps: {
                ...prevState.canvasProps,
                height: parseInt(value)
            }
        }));
    };

    const saveNewValue = (event) => {
        const { value } = event.target;
        setNewValue(value);
    }

    const addNewValue = () => {
        const updatedValues = [...graphObject.values, parseInt(newValue)];

        setGraphObject({
            ...graphObject,
            values: updatedValues,
        });
    }

    const removeSelectedValue = () => {
        const updatedValues = graphObject.values.filter(value => value != selectedValue);

        setGraphObject({
            ...graphObject,
            values: updatedValues,
        });

        setSelectedValue(updatedValues[0]);
    };

    const changeGraphColor = (event) => {
        const { value } = event.target;
        setGraphObject(prevState => ({
            ...prevState,
            color: value
        }));
    };

    const changeGraphMarks = (event) => {
        const { value } = event.target;
        setGraphObject(prevState => ({
            ...prevState,
            scaleMarks: parseInt(value)
        }));
    };

    const changeGraphCircles = (event) => {
        const { value } = event.target;
        setGraphObject(prevState => ({
            ...prevState,
            circles: value === 'true'
        }));
    };

    useEffect(() => {
        generateGraph(graphObject);
    }, [graphObject]);

    return (
        <>
            <h1>{t('titleTest')}</h1>

            <section id='graph-section'>
                <div id='canvas-container' className="graph-container">
                    <canvas id="canvas"></canvas>
                </div>
            </section>

            <section id='demo-section'>
                <div className='demo-container'>
                    <label htmlFor="graph_width">Max Width</label>
                    <input type="number" name='graph_width' id='graph_width' className='test-input'
                        onChange={changeGraphWidth} value={graphObject.canvasProps.maxWidth} />
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph_height">Height</label>
                    <input type="number" name='graph_height' id='graph_height' className='test-input'
                        onChange={changeGraphHeigh} value={graphObject.canvasProps.height} />
                </div>

                <div className='updateValues-container'>
                    <label htmlFor="newvalue">Add a new value</label>
                    <div>
                        <input type="number" placeholder='new value' className='test-input' id='newvalue'
                            onChange={saveNewValue} />
                        <button onClick={() => addNewValue()} className='updateValues-button'><FaPlus /></button>
                    </div>
                </div>

                <div className='updateValues-container'>
                    <select name="" id="" value={selectedValue}
                        onChange={(event) => setSelectedValue(event.target.value)}>
                        {graphObject.values.map((value, index) => (
                            <option key={index} value={value}>{value}</option>
                        ))}
                    </select>
                    <button onClick={() => removeSelectedValue(selectedValue)} className='updateValues-button'><FaMinus /></button>
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph-color">Color</label>
                    <input type="color" name='graph-color' id='graph-color' className='test-input'
                        onChange={changeGraphColor} placeholder='Chart color' value={graphObject.color} />
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph-scaleMarks">Scale marks</label>
                    <input type="number" name='graph-scaleMarks' id='graph-scaleMarks' className='test-input'
                        onChange={changeGraphMarks} value={graphObject.scaleMarks} />
                </div>

                <div className="radio-input demo-container">
                    <div className='radio-container'>
                        <label htmlFor="radio-circle">Circles</label>
                        <input name="style-radio" type="radio" className="radio-style" id='radio-circle'
                            value="true" onChange={changeGraphCircles} checked={graphObject.circles === true} />
                    </div>
                    <div className='radio-container'>
                        <label htmlFor="radio-none">None</label>
                        <input name="style-radio" type="radio" className="radio-style" id='radio-none'
                            value="false" onChange={changeGraphCircles} checked={graphObject.circles === false} />
                    </div>
                </div>
            </section>

            <section id='code-mirror-section'>
                <div id='code-mirror-js'>
                    <CodeMirrorJS code={graphObject} />
                </div>
            </section>
        </>
    )
}