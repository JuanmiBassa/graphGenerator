import React from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

export default function CodeMirrorHTML () {

    const codeString = `<div class='graph-parent-container'>
    <div className="graph-container">
        <canvas id="canvas"></canvas>
    </div>
</div>`;

    return (
        <>
            <CodeMirror
                value={codeString}
                width='100%'
                theme={vscodeDarkInit()}
                extensions={[html({})]}
                readOnly={true}
            />
        </>
    );
};
