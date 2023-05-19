const path = require('path');
const fs = require('fs');

const queryPath = path.join(__dirname, 'query');
const mutationPath = path.join(__dirname, 'mutation');

module.exports = [
  ...fs.readdirSync(queryPath).map(p => `query/${p}`),
  ...fs.readdirSync(mutationPath).map(p => `mutation/${p}`),
].map(p => require(`./${p}`));
