import './index.css';
import Score from './modules/competent.js';

const consumeAPI = require('./modules/consumeAPI.js');
const tableData = require('./modules/tableData.js');

const actualURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const myID = '/5sDMmKs383LVojK4Du2a/scores/';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');

tableData(actualURL, myID);

refresh.addEventListener('click', () => {
  tableData(actualURL, myID);
});

submit.addEventListener('click', async () => {
  const competent = document.querySelector('#name').value;
  const marks = document.querySelector('#score').value;
  const competentScore = new Score(competent, marks);
  await consumeAPI.printScore(actualURL, myID, JSON.stringify(competentScore));
  tableData(actualURL, myID);
});
