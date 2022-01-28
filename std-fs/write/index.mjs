import fs from 'fs';

for (let i = 0; i < 5; i++) {
    const file = `sync-${i}.txt`;
    const out  = fs.writeFileSync(file, "Olá, um arquivo escrito com writeFileSync");
    console.log(out);
}

for (let i = 0; i < 5; i++) {
    const file = `sync-${i}.txt`;
    fs.writeFile(file, "Olá, um arquivo escrito com writeFile", (error, file) => {
        console.log(file);
    });
}


// Assincrono roda em paralelo
// Sincrono roda de forma bloqueante
