import fs from 'fs';

const readSync = (file) => {
    console.log("Leitura sincrona");

    const timeInit = new Date().getTime();
    fs.readFileSync(file);
    const timeFinish = new Date().getTime();

    console.log(`Bloqueio sincrono ${timeFinish - timeInit}ms`);
}

export { readSync };
