import React from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeDarkInit } from '@uiw/codemirror-theme-vscode';

export default function CodeMirrorJS ({ code }) {
    const objectToString = (obj, indent = 0) => {
        let result = '';
        const keys = Object.keys(obj);
        result += '{\n';

        keys.forEach((key, index) => {
            const value = obj[key];
            const valueType = typeof value;
            const isLast = index === keys.length - 1;

            result += ' '.repeat((indent + 1) * 6);
            result += `${JSON.stringify(key)}: `;

            if (valueType === 'object' && value !== null && !Array.isArray(value)) {
                result += objectToString(value, indent + 1);
            } else if (Array.isArray(value)) result += JSON.stringify(value);
            else result += JSON.stringify(value);

            if (!isLast) result += ',';
            result += '\n';
        });

        result += ' '.repeat(indent * 6);
        result += '}';

        return result;
    };

    const codeString = `const object = ${objectToString(code)}; \n\n generateGraph(object);`;

    return (
        <>
            <CodeMirror
                value={codeString}
                width='100%'
                theme={vscodeDarkInit()}
                extensions={[javascript({})]}
                readOnly={true}
            />
        </>
    );
};
