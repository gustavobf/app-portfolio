const { writeFileSync } = require('fs');

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `
export const environment = {
  production: true,
  linkedinUrl: '${process.env.LINKEDIN_URL}',
  myEmail: '${process.env.MY_EMAIL}'
};
`;

writeFileSync(targetPath, envConfigFile, { encoding: 'utf-8' });