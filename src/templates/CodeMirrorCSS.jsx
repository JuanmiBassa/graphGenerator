import React from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

export default function CodeMirrorCSS () {

    const codeString = `.graph-parent-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .graph-container {
        padding: 20px 0px;
        border: 1px #727AA1 solid;
        background: #15233E;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    canvas {
        width: 90%;
        height: 100%;
    }`;

    return (
        <>
            <CodeMirror
                value={codeString}
                width='100%'
                theme={vscodeDarkInit()}
                extensions={[css({})]}
                readOnly={true}
            />
        </>
    );
};
