import fs from 'fs';
import http from 'http';
import { readSync } from './sync.mjs';
import { readAsync } from './async.mjs';

const download = 'http://nodejs.org/dist/v12.14.1/node-v12.14.1-x86.msi';
const arquivo = './stream/node.exe';
const stream = fs.createWriteStream(arquivo);

http.get(download, (response) => {
    console.log("fazendo download do Node.js");
    response.on('data', (data) => stream.write(data));
    response.on('end', () => {
        stream.end();
        console.log("Download finalizado");
        readAsync(arquivo);
        readSync(arquivo);
    });
});
