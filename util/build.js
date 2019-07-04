const fs = require('fs-extra');
const childProcess = require('child_process');

fs.removeSync('./dist/');
fs.copySync('./src/controllers', './dist/controllers');

childProcess.exec('tsc --build tsconfig.prod.json');
