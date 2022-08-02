/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const parametry = require('./smtp-parametry')
const mail = require('./notification')
const run = async (list) => {
  const pairs = [];
  const noSent = [];
  const names = list.map((per) => per.name);
  let pair = [];

  do {
    pair = [...names].sort(() => (Math.random() > 0.5 ? 1 : -1));
  } while (!verifyOrder(names, pair));
  let current = null;
  try {
    for (const name of names) {
      current = name;
      const b = pair.shift();
      pairs.push({ a: name, b });
      console.log( `Mi so ${name}, le tocó ${b}`)
      await mail.notify(parametry, 'Prueba', html(name,b), findEmail(list, name));
    }
  } catch (error) {
    console.log(error)
    noSent.push(current);
  }

  return { noSent };
};

const findEmail = (list, name) => {
  return list.find((p) => p.name === name).email;
};

const verifyOrder = (names, pairs) => {
  for (let i = 0; i < names.length; i++) {
    if (names[i] === pairs[i]) {
      return false;
    }
  }
  return true;
};

const html = (a, b) => {
    return `
        <style></style>
        <h1>Estimado ${a}</h1>
        <p>le tocó ${b}</p>
    `
}
module.exports = { run }
