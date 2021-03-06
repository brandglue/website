#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const remark = require('remark');
const extract = require('remark-extract-frontmatter');
const frontmatter = require('remark-frontmatter');
const parser = require('remark-parse');
const compiler = require('remark-stringify');
const vfile = require('to-vfile');
const yaml = require('yaml').parse;

const migratedMarkdownPath = path.join(__dirname, '../migrated');
const migratedImagesPath = path.join(__dirname, '../migrated-images');
const destinationPath = path.join(__dirname, '../src/content/blog');

fs.readdir(migratedMarkdownPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const [year, month, _, ...folderSegments] = file.split('-');

    const folderName = folderSegments.join('-').split('.')[0];

    const currentFilePath = path.join(migratedMarkdownPath, `/${file}`);
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
            `${migratedImagesPath}/${coverImageFileName}`,
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
