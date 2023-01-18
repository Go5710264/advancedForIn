[![Build status](https://ci.appveyor.com/api/projects/status/5n2t86ptxsr81x4x?svg=true)](https://ci.appveyor.com/project/Go5710264/advancedforin)

## Сортировка массива объектов
Реализована функция, которая для переданного объекта возвращает массив его свойств со значениями, отсортированный по свойствам (второй аргумент функции - порядок сортировки свойств). Свойства, которые остались в объекте, сортируются в алфавитном порядке.

### Дано:
``` javascript
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
```
### Пример вызова функции:
``` javascript
orderByProps(obj, ["name", "level"]);
```
### Результат:
```javascript
[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
];
```