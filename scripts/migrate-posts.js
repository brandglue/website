#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const migratedPath = path.join(__dirname, '../migrated');
const destinationPath = path.join(__dirname, '../src/content/blog');

fs.readdir(migratedPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const [year, month, _, folderName] = file.split('-');

    const currentFilePath = path.resolve(migratedPath, `/${file}`);
    const targetPath = `${destinationPath}/${year}/${month}/${folderName}`;

    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    fs.copyFile(currentFilePath, `${targetPath}/index.mdx`, (err) => {
      if (err) throw err;
      console.log(`${currentFilePath} was copied to ${targetPath}`);
    });
  });
});
