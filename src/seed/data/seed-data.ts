import * as bcrypt from 'bcrypt';

interface SeedUser {
  email: string;
  name: string;
  lastName: string;
  password: string;
  roles: string[];
}

interface SeedData {
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [],
};

const names = [
  'Ana',
  'Carlos',
  'Daniel',
  'Elena',
  'Fernando',
  'Gloria',
  'Hector',
  'Isabel',
  'Jorge',
  'Laura',
];
const lastNames = [
  'Garcia',
  'Martinez',
  'Rodriguez',
  'Lopez',
  'Sanchez',
  'Perez',
  'Gonzalez',
  'Hernandez',
  'Diaz',
  'Torres',
];

function randomEmail(name: string, lastName: string, i: number) {
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  return `${name.toLowerCase()}.${lastName.toLowerCase()}${i}@${randomDomain}`;
}

function randomRole() {
  const roles = ['admin', 'super-user', 'user'];
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}

for (let i = 0; i < 20; i++) {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  const email = randomEmail(randomName, randomLastName, i);
  const password = bcrypt.hashSync('Abc123', 10);
  const role = randomRole();

  const user: SeedUser = {
    email,
    name: randomName,
    lastName: randomLastName,
    password,
    roles: [role],
  };
  if (role !== 'user') user.roles.push('user');

  initialData.users.push(user);
}
