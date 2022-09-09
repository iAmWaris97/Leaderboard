const consumeAPI = require('./consumeAPI.js');

const showResult = async (actualURL, myID) => {
  const scores = await consumeAPI.fetchScores(actualURL, myID);
  const tbody = document.querySelector('tbody');
  let tbodyData = '';
  scores.forEach((element) => {
    tbodyData += ` <tr>
        <td>${element.user}</td>
        <td>${element.score}</td>
    </tr>`;
  });
  tbody.innerHTML = tbodyData;
};

module.exports = showResult;
