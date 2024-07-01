const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const folderPath = './images/pro-new';
const newWidth = 500;

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    const inputFilePath = path.join(folderPath, file);
    const outputFileName = path.basename(file, path.extname(file)) + '_big' + path.extname(file);
    const outputFilePath = path.join(folderPath, outputFileName);

    sharp(inputFilePath)
      .resize(newWidth)
      .toFile(outputFilePath, (err, info) => {
        if (err) throw err;
        console.log(`Resized ${file} to ${newWidth}px width as ${outputFileName}`);
      });
  });
});
