import './style.css';

const characteristics = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function propertySorting(obj, propArray) {
  let newPropertyOrder = [];
  const alphabeticalSorting = [];

  propArray.forEach((prop) => {
    if (prop in obj) {
      newPropertyOrder.push({
        key: prop,
        value: obj[prop],
      });
      delete obj[prop];
    }
  });

  Object.entries(obj).forEach(([prop, meaning]) => {
    alphabeticalSorting.push({
      key: prop,
      value: meaning,
    });
    delete obj[prop];
  });

  alphabeticalSorting.sort((a, b) => (a.key > b.key ? 1 : -1));
  newPropertyOrder = [...newPropertyOrder, ...alphabeticalSorting];
  return newPropertyOrder;
}

propertySorting(characteristics, ['health', 'attack']);
