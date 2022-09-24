export interface iUser {
  login: string;
  firstName: string;
  secondName: string;
  email: string;
  birthDay: string;
  address: string;
  country: string;
  password: string;
  gender: 'male' | 'female' | 'other';
  role: 'admin' | 'user';
}

export class User implements iUser {
  login: string;
  address: string;
  birthDay: string;
  country: string;
  email: string;
  firstName: string;
  secondName: string;
  password: string;
  gender: 'male' | 'female' | 'other';
  role: 'admin' | 'user';

  constructor(obj: iUser) {
    this.address = obj.address;
    this.birthDay = obj.birthDay;
    this.country = obj.country;
    this.email = obj.email;
    this.firstName = obj.firstName;
    this.gender = obj.gender;
    this.login = obj.login;
    this.password = obj.password
    this.role = obj.role;
    this.secondName = obj.secondName;
  }

  getAge(): number {
    const today = new Date();
    const birthDate = new Date(this.birthDay);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}

export const Users: User[] = [
  new User({
    login: 'm0use',
    firstName: 'Mykhailo',
    secondName: 'Zhuravlov',
    email: 'mz@gmail.com',
    birthDay: '1986-12-10T23:04:00.000Z',
    address: 'Kyiv',
    country: 'Ukraine',
    gender: 'male',
    role: 'admin',
    password: 'admin123',
  }),
  new User({
    login: 'Dendi',
    firstName: 'Danil',
    secondName: 'Ihutin',
    email: 'dboss@gmail.com',
    birthDay: '1989-12-30T19:04:00.000Z',
    address: 'Lviv',
    country: 'Ukraine',
    gender: 'male',
    role: 'user',
    password: 'user321',
  }),
];
