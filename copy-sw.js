const fs = require('fs');
const path = require('path');

const noPostinstallPath = path.resolve(__dirname, '.no-postinstall');

if (!fs.existsSync(noPostinstallPath)) {
    const srcPath = path.resolve(__dirname, 'src/sw.js');
    const destPath = path.resolve(process.cwd(), '../../public/sw.js');
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
} else {
    console.log('Skipping postinstall script because .no-postinstall file exists.');
}
