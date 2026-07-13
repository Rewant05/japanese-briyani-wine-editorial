import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function convertImages() {
  try {
    const files = await fs.readdir(imagesDir);
    for (const file of files) {
      if (file.endsWith('.png')) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
        
        console.log(`Converting ${file} to WebP...`);
        // We will resize slightly if it's large to reduce size and convert to webp
        // But for safe side, we'll just convert to webp with good compression.
        // For hero_wine, we can resize width to 1200 max.
        let sharpInst = sharp(inputPath);
        
        const metadata = await sharpInst.metadata();
        if (metadata.width && metadata.width > 1200) {
           sharpInst = sharpInst.resize({ width: 1200, withoutEnlargement: true });
        }
        
        await sharpInst.webp({ quality: 75 }).toFile(outputPath);
        
        try {
          await fs.unlink(inputPath);
          console.log(`Converted and removed ${file}`);
        } catch (e) {
          console.log(`Converted ${file} to WebP but couldn't remove original:`, e.message);
        }
      }
    }
    console.log('All images converted successfully.');
  } catch (err) {
    console.error('Error converting images:', err);
  }
}

convertImages();
