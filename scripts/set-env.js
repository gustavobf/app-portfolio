const fs = require('fs');
const path = require('path');

const envProdPath = path.join(__dirname, '../src/environments/environment.prod.ts');
let fileContent = fs.readFileSync(envProdPath, 'utf8');

const linkedinUrl = process.env.LINKEDIN_URL || '';
fileContent = fileContent.replace('__LINKEDIN_URL__', linkedinUrl);

fs.writeFileSync(envProdPath, fileContent);