import { UnsupportedMediaTypeException } from '@nestjs/common';
import * as fs from 'fs';
import { FileUpload } from 'graphql-upload';
import { promisify } from 'util';

const DEFAULT_IMAGES_SIZE = 10;
const VALID_IMAGE_FORMAT = /(jpe?g|png|gif|webp)$/;

export const saveImage = async (image: Promise<FileUpload>) => {
  const { createReadStream, mimetype } = await image;
  const extension = mimetype.split('/')[1];

  if (!extension.match(VALID_IMAGE_FORMAT)) {
    throw new UnsupportedMediaTypeException('Only image files are allowed');
  }

  const filename = `${Date.now()}.${extension}`;
  const path = `./uploads/${filename}`;

  await new Promise((resolve, reject) => {
    const stream = createReadStream();
    stream
      .pipe(fs.createWriteStream(path))
      .on('error', (error: Error) => {
        fs.unlink(path, () => {
          reject(error);
        });
      })
      .on('finish', resolve);
  });

  return filename;
};

export const copyImage = (filename: string) => {
  const sourcePath = `./uploads/${filename}`;
  const newFilename = `${Date.now()}.${filename.split('.')[1]}`;
  const newPath = `./uploads/${newFilename}`;

  fs.copyFile(sourcePath, newPath, (err) => {
    if (err) {
      throw new Error(`Failed to copy image file: ${err}`);
    }
  });
  return newFilename;
};

export const randomDefaultImagePath = () =>
  `./src/server/images/assets/defaults/${Math.floor(Math.random() * DEFAULT_IMAGES_SIZE) + 1}.jpeg`;

export const deleteImageFile = async (filename: string) => {
  const unlinkAsync = promisify(fs.unlink);
  const path = `./uploads/${filename}`;
  await unlinkAsync(path);
};
