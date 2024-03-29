export default function generateGraph(dataGraph) {
    const canvas = document.getElementById(`${dataGraph.canvasProps.id}`);
    const ctx = canvas.getContext('2d');

    canvas.width = dataGraph.canvasProps.maxWidth;
    canvas.height = dataGraph.canvasProps.maxHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let marks = dataGraph.scaleMarks - 1;
    if (isNaN(marks)) marks = 0;

    const maxValue = Math.max.apply(null, dataGraph.values);

    let scaledValues = dataGraph.values.map(function (value) {
        return value / maxValue * (canvas.height - 20);
    });

    drawCanvasLinesAndText(canvas, ctx, marks, maxValue);

    let startPosX, startPosY, endPosX, endPosY = 0;
    ctx.beginPath();

    let marginLeft = marks < 3 ? marks < 2 ? 5 : 15 : 30;
    for (let x = 0; x < scaledValues.length; x++) {
        let posX = x * ((canvas.width - marginLeft - 10) / (scaledValues.length - 1));
        let posY = canvas.height - scaledValues[x];

        drawLine(posX + marginLeft, posY, dataGraph.color, ctx);

        if (x == 0) {
            startPosX = posX + marginLeft;
            startPosY = posY;
        } else if (x == scaledValues.length - 1) {
            endPosX = posX + marginLeft;
            endPosY = posY;

            drawLine(endPosX, endPosY + scaledValues[x], 'transparent', ctx);
            drawLine(startPosX, endPosY + scaledValues[x], 'transparent', ctx);
            drawLine(startPosX, startPosY, 'transparent', ctx);

            let gradient = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, canvas.height);
            gradient.addColorStop(0, addAlphaToColor(dataGraph.color, 0.5));
            gradient.addColorStop(1, addAlphaToColor(dataGraph.color, 0));
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    if (dataGraph.circles) {
        for (let x = 0; x < scaledValues.length; x++) {
            let posX = x * ((canvas.width - marginLeft - 10) / (scaledValues.length - 1));
            let posY = canvas.height - scaledValues[x];

            drawCircle(posX + marginLeft, posY, 4, darkenColor(dataGraph.color, 60), ctx);
        }
    }
    ctx.closePath()
}

function drawLine(x, y, color, ctx) {
    ctx.strokeStyle = color;
    ctx.lineTo(x, y - 5);
    ctx.stroke();
}

function drawCircle(x, y, radius, color, ctx) {
    ctx.beginPath();
    ctx.arc(x, y - 5, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawCanvasLinesAndText(canvas, ctx, marks, maxValue) {
    let spaceBetweenLines = (canvas.height - 20) / (marks);
    let StatNumbers = maxValue / marks;

    for (let i = 0; i <= marks; i++) {
        let y = i * spaceBetweenLines + 15;

        ctx.beginPath();
        ctx.strokeStyle = '#181C27';
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        ctx.font = '15px Arial';
        ctx.fillStyle = '#cecece';
        ctx.textAlign = 'start';
        let num = Math.abs(StatNumbers * i - (maxValue));
        ctx.fillText(abbreviateNumber(num), 0, y - 3);

    }
}

function abbreviateNumber(num) {
    if (num == 0) return num;
    else if (num < 1) return num.toFixed(3);
    else if (num < 100) return Math.trunc(num);
    else if (num >= 100 && num < 1000) return Math.trunc(num);
    else if (num >= 1000 && num < 1000000) {
        num /= 1000;
        return `${num.toFixed(2)}K`
    } else if (num >= 1000000 && num < 1000000000) {
        num /= 1000000;
        return `${num.toFixed(2)}M`
    } else if (num >= 1000000000) {
        num /= 1000000000;
        return `${num.toFixed(2)}B`
    }
}

function darkenColor(color, amount) {
    function hexToRgb(hexColor) {
        const bigint = parseInt(hexColor.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    function darkenRgb(rgbColor, amount) {
        return rgbColor.map(value => Math.max(0, value - amount));
    }

    if (color.startsWith('#')) {
        const [r, g, b] = hexToRgb(color);
        const [darkenedR, darkenedG, darkenedB] = darkenRgb([r, g, b], amount);
        return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
    }

    if (color.startsWith('rgb')) {
        const [, r, g, b] = color.match(/\d+/g).map(Number);
        const [darkenedR, darkenedG, darkenedB] = darkenRgb([r, g, b], amount);
        return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
    }

    return null;
}

function addAlphaToColor(color, alpha) {
    if (color.startsWith('#')) {
        return color + Math.round(alpha * 255).toString(16).padStart(2, '0');
    }

    if (color.startsWith('rgb') || color.startsWith('hsl')) {
        const endIndex = color.lastIndexOf(')') + 1;
        return color.slice(0, endIndex) + `, ${alpha})`;
    }

    return null;
}