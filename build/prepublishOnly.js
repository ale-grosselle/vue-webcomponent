const exec = require('child_process').execSync;

process.env.BUILD = 'production';
process.env.BABEL_ENV = process.env.BUILD ? process.env.BUILD : "development";

exec(`npm run lint-fix`, {stdio: 'inherit'});
exec(`npm run lint`, {stdio: 'inherit'});
exec(`npm run build`, {stdio: 'inherit'});

