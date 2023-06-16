import generator from 'generate-password';

const generateUserPassword = () => {
  return generator.generate({
    length: 10,
    lowercase: true,
    uppercase: true,
    numbers: true,
    strict: true,
    excludeSimilarCharacters: true,
  });
}

export default generateUserPassword;
