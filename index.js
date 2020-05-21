import { promises as fs } from 'fs';

const file = await fs.readFile('sample.txt', 'utf-8');
console.log(file);