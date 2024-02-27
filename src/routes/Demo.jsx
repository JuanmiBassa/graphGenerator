import '../styles/demo.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import generateGraph from '../scripts/graphGenerator.js'
import CodeMirrorJS from '../templates/CodeMirrorJS.jsx'
import CodeMirrorHTML from '../templates/CodeMirrorHTML.jsx'
import CodeMirrorCSS from '../templates/CodeMirrorCSS.jsx'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";

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
        scaleMarks: 5,
        circles: false,
    });
    const [selectedValue, setSelectedValue] = useState();
    const [newValue, setNewValue] = useState();
    const [activeCode, setActiveCode] = useState(3);

    useEffect(() => {
        generateGraph(graphObject);
    }, [graphObject]);

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
        const updatedValues = [...graphObject.values, newValue];

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

    return (
        <>
            <h1>{t('titleDemo')}</h1>

            <section id='graph-section'>
                <div className="graph-container">
                    <canvas id="canvas"></canvas>
                </div>
            </section>

            <section id='demo-section'>
                <div className='demo-container'>
                    <label htmlFor="graph_width">{t('graphWidth')}</label>
                    <input type="number" name='graph_width' id='graph_width' className='test-input'
                        onChange={changeGraphWidth} value={graphObject.canvasProps.maxWidth} />
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph_height">{t('graphHeight')}</label>
                    <input type="number" name='graph_height' id='graph_height' className='test-input'
                        onChange={changeGraphHeigh} value={graphObject.canvasProps.height} />
                </div>

                <div className='updateValues-container'>
                    <label htmlFor="newValue">{t('graphAddValue')}</label>
                    <div className='values-container'>
                        <input type="number" placeholder='new value' className='test-input' id='newValue'
                            onChange={saveNewValue} />
                        <button onClick={() => addNewValue()} className='updateValues-button'><FaPlus /></button>
                    </div>
                </div>

                <div className='updateValues-container'>
                    <label htmlFor="removeValue">{t('graphDeleteValue')}</label>
                    <div className='values-container'>
                        <select name="removeValue" id="removeValue" value={selectedValue}
                            onChange={(event) => setSelectedValue(event.target.value)}>
                            {graphObject.values.map((value, index) => (
                                <option key={index} value={value}>{value}</option>
                            ))}
                        </select>
                        <button onClick={() => removeSelectedValue(selectedValue)} className='updateValues-button'><FaMinus /></button>
                    </div>
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph-color">Color</label>
                    <input type="color" name='graph-color' id='graph-color' className='test-input'
                        onChange={changeGraphColor} placeholder='Chart color' value={graphObject.color} />
                </div>

                <div className='demo-container'>
                    <label htmlFor="graph-scaleMarks">{t('graphScaleMarks')}</label>
                    <input type="number" name='graph-scaleMarks' id='graph-scaleMarks' className='test-input'
                        onChange={changeGraphMarks} value={graphObject.scaleMarks} />
                </div>

                <div id='radio-container' className="demo-container">
                    <label>{t('graphStyle')}</label>
                    <div id='radio-inputs'>
                        <div>
                            <label htmlFor="radio-circle">{t('graphStyle1')}</label>
                            <input name="style-radio" type="radio" className="radio-style" id='radio-circle'
                                value="true" onChange={changeGraphCircles} checked={graphObject.circles === true} />
                        </div>
                        <div>
                            <label htmlFor="radio-none">{t('graphStyle2')}</label>
                            <input name="style-radio" type="radio" className="radio-style" id='radio-none'
                                value="false" onChange={changeGraphCircles} checked={graphObject.circles === false} />
                        </div>
                    </div>
                </div>
            </section>

            <section id='code-mirror-section'>
                <div id='code-mirror-buttons'>
                    <button className='button-html' onClick={() => setActiveCode(1)}><FaHtml5 /></button>
                    <button className='button-css' onClick={() => setActiveCode(2)}><FaCss3Alt /></button>
                    <button className='button-js' onClick={() => setActiveCode(3)}><RiJavascriptFill /></button>
                </div>
                <div id='code-mirror-container'>
                    {activeCode == 1 && <CodeMirrorHTML />}
                    {activeCode == 2 && <CodeMirrorCSS />}
                    {activeCode == 3 && <CodeMirrorJS code={graphObject} />}
                </div>
            </section>

        </>
    )
}