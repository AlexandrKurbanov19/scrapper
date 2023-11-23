import type { Rule } from 'rc-field-form/lib/interface';

export const registrationFirstNameRule: Rule[] = [
  {
    transform: (value) => value.trim(),
  },
  {
    required: true,
    message: 'Пожалуйста введите имя',
  },
  { whitespace: false },
];
export const registrationLastNameRule: Rule[] = [
  {
    transform: (value) => value.trim(),
  },
  {
    required: true,
    message: 'Пожалуйста введите свою фамилию',
  },
  { whitespace: false },
];

export const lastNameProfile = [
  {
    required: true,
    message: 'Пожалуйста введите свою фамилию',
    min: 2,
  },
];

export const firstNameProfile = [
  {
    required: true,
    message: 'Пожалуйста введите свое имя',
    min: 2,
  },
];

export const registrationRole = [
  {
    required: true,
    message: 'Пожалуйста выбирете свою роль',
  },
];

export const registrationEmailRule: Rule[] = [
  {
    type: 'email',
    message: 'Введите корректный email',
    transform: (value) => value.trim(),
  },
  {
    required: true,
    message: 'Пожалуйста введите свой email',
  },
  { whitespace: false },
];

export const phoneRule = [
  {
    pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
    message: 'Пожалуйста введите свой номер телефона',
  },
  {
    required: true,
    message: 'Пожалуйста введите свой номер телефона',
  },
];

export const passRule = [
  {
    required: true,
    message: 'Пожалуйста введите свой пароль',
  },
];
export const passRuleReset = [
  {
    required: true,
    message: 'Введите текущий пароль',
  },
];
export const newPassRuleReset = [
  {
    required: true,
    message: 'Введите текущий пароль',
  },
];
export const confirmPassRule: Rule[] = [
  {
    required: true,
    message: 'Пожалуйста, подтвердите свой пароль!',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
    },
  }),
];
