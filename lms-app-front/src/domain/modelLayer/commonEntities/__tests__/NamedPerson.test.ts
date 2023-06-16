import { NamedPerson } from '../NamedPerson';

test('NamedPerson view fullName empty', () => {
  const namedPeron = NamedPerson.create({});

  expect(namedPeron.fullName).toBe('');
});

test('NamedPerson view fullName with firstname', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
  });

  expect(namedPeron.fullName).toBe('Иван');
});

test('NamedPerson view fullName with firstname and patronymic', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
    patronymic: 'Иванович',
  });

  expect(namedPeron.fullName).toBe('Иван Иванович');
});

test('NamedPerson view fullName with firstname, lastname and patronymic', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
    patronymic: 'Иванович',
    lastname: 'Иванов',
  });

  expect(namedPeron.fullName).toBe('Иванов Иван Иванович');
});

test('NamedPerson view avatarChars empty', () => {
  const namedPeron = NamedPerson.create({});

  expect(namedPeron.avatarChars).toBe('');
});

test('NamedPerson view avatarChars with firstname', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
  });

  expect(namedPeron.avatarChars).toBe('И');
});

test('NamedPerson view avatarChars with firstname and patronymic', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
    patronymic: 'Петрович',
  });

  expect(namedPeron.avatarChars).toBe('И');
});

test('NamedPerson view avatarChars with firstname, lastname and patronymic', () => {
  const namedPeron = NamedPerson.create({
    firstname: 'Иван',
    patronymic: 'Петрович',
    lastname: 'Сидоров',
  });

  expect(namedPeron.avatarChars).toBe('С');
});

test('NamedPerson view avatarChars with lastname and patronymic', () => {
  const namedPeron = NamedPerson.create({
    patronymic: 'Петрович',
    lastname: 'Сидоров',
  });

  expect(namedPeron.avatarChars).toBe('С');
});

test('NamedPerson view avatarChars with lastname', () => {
  const namedPeron = NamedPerson.create({
    lastname: 'Сидоров',
  });

  expect(namedPeron.avatarChars).toBe('С');
});

test('NamedPerson view avatarChars with patronymic', () => {
  const namedPeron = NamedPerson.create({
    patronymic: 'Петрович',
  });

  expect(namedPeron.avatarChars).toBe('П');
});
