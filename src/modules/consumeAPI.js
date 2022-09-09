const fetchScores = async (actual, id) => {
  const response = await fetch(`${actual}${id}`)
    .then((response) => response.json());
  return response.result;
};

const printScore = async (actual, id, data) => {
  const response = await fetch(`${actual}${id}`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
  return response;
};

module.exports = { fetchScores, printScore };
