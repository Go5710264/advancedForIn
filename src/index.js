import './style.css';

const characteristics = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

let newPropertyOrder = [];
const alphabeticalSorting = [];

export default function propertySorting(obj, propArray) {
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

//   for (const key in obj) {
//     alphabeticalSorting.push({
//       key: key,
//       value: obj[key]
//     });
//     delete obj[key];
//   };
  alphabeticalSorting.sort((a, b) => (a.key > b.key ? 1 : -1));

  return newPropertyOrder = [...newPropertyOrder, ...alphabeticalSorting];
}

propertySorting(characteristics, ['health', 'attack']);
