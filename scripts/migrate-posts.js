#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const remark = require('remark');
const parser = require('remark-parse');
const compiler = require('remark-stringify');
const frontmatter = require('remark-frontmatter');
const extract = require('remark-extract-frontmatter');
const yaml = require('yaml').parse;
const vfile = require('to-vfile');

const migratedPath = path.join(__dirname, '../migrated');
const destinationPath = path.join(__dirname, '../src/content/blog');

fs.readdir(migratedPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const [year, month, _, ...folderSegments] = file.split('-');

    const folderName = folderSegments.join('-').split('.')[0];

    const currentFilePath = path.join(migratedPath, `/${file}`);
    const targetPath = `${destinationPath}/${year}/${month}/${folderName}`;

    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    // copy markdown
    fs.copyFile(currentFilePath, `${targetPath}/index.mdx`, (err) => {
      if (err) throw err;
      console.log(`${currentFilePath} was copied to ${targetPath}`);
    });

    // copy cover_image
    remark()
      .use(parser)
      .use(compiler)
      .use(frontmatter)
      .use(extract, { yaml: yaml })
      .process(vfile.readSync(currentFilePath), (err, file) => {
        if (err) throw err;

        const coverImageFileName = file.data['cover_image'];

        if (coverImageFileName) {
          fs.copyFile(
            path.join(__dirname, `../migrated-images/${coverImageFileName}`),
            `${targetPath}/cover.jpg`,
            (err) => {
              if (err) throw err;
              console.log(`${coverImageFileName} was copied to ${targetPath}`);
            },
          );
        }
      });
  });
});
