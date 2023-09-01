import Team from '../classes/team';
import Character from '../classes/character';

const obj = new Character('мечник');

test('создание экземпляра Team с добавлением объекта { name: мечник, }', () => {
  const team = new Team();
  team.add(obj);
  const expectation = new Set([{ name: 'мечник' }]);
  expect(team.members).toEqual(expectation);
});

test('добавление нового игрока в команду', () => {
  const team = new Team();
  team.add(obj);
  const set = new Set([{ name: 'мечник' }, { name: 'лучник' }]);
  // добавление нового объекта
  const obj2 = new Character('лучник');
  expect(team.add(obj2)).toEqual(set);
});

test('добавление существующего игрока в команду', () => {
  const team = new Team();
  team.add(obj);
  expect(() => team.add(obj)).toThrow(new Error('такой объект уже в команде!'));
});

test('добавление нескольких игроков', () => {
  const obj1 = new Character('Ivan');
  const obj2 = new Character('Petr');
  const expectation = new Set([{ name: 'мечник' }, { name: 'Ivan' }, { name: 'Petr' }]);
  const team = new Team();
  team.add(obj);
  expect(team.addAll(obj, obj, obj1, obj2)).toEqual(expectation);
});

test('конвертация set в массив', () => {
  const team = new Team();
  team.add(obj);
  const obj1 = new Character('Ivan');
  const obj2 = new Character('Petr');
  team.addAll(obj1, obj2);

  const expectation = [
    { name: 'мечник' },
    { name: 'Ivan' },
    { name: 'Petr' }];

  expect(team.toArray()).toEqual(expectation);
});
