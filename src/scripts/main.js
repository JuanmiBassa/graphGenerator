import generateGraph from './graphGenerator.js';

const dataGraph1 = {
  canvasProps: {
    id: 'canvas1',
    maxWidth: 500,
    height: 200,
  },
  values: [40, 80, 70, 50, 100, 40, 92, 70, 120],
  color: '#FB5350',
  scaleMarks: 5,
  limitNums: 10,
  circles: false,
}

const dataGraph2 = {
  canvasProps: {
    id: 'canvas2',
    maxWidth: 400,
    height: 200,
  },
  values: [5345, 4250, 3900, 4780, 2100, 3500, 7000, 4890],
  color: '#86F0E1',
  scaleMarks: 2,
  limitNums: 2,
  circles: true,
}

generateGraph(dataGraph1);
generateGraph(dataGraph2);