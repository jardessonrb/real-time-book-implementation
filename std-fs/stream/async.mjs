import fs from 'fs';

const readAsync = (file) => {
    console.log("Leitura assincrona");

    const timeInit = new Date().getTime();
    fs.readFile(file);
    const timeFinish = new Date().getTime();

    console.log(`Bloqueio assincrono ${timeFinish - timeInit}ms`);
}

export { readAsync };
