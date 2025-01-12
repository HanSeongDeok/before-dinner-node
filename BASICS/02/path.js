import { dirname, join, basename } from "path"
import { fileURLToPath } from 'url'

const fullPath = join("some", "work", "ex.txt");
console.log(fullPath);

const dir = dirname(fullPath);
console.log(dir);

const fileName = basename(fullPath);
const __filename = fileURLToPath(import.meta.url);
const gobalFileName = basename(__filename);
const __dirname = dirname(__filename);
const onlyNameFile = basename(__filename, '.js');

console.log(fileName);
console.log(__filename);
console.log(__dirname);
console.log(gobalFileName);
console.log(onlyNameFile);