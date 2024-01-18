const fs = require('fs');

function appendData(filePath, text) {
    return new Promise((resolve, reject) => {
        const fileStream = fs.createWriteStream(filePath, { flags: fileExists ? 'a' : 'w' });

        fileStream.write(`${text}\n`);
        fileStream.end();
        fileStream.on('finish', () => {
            resolve('Conteúdo adicionado ao arquivo CSV com sucesso.');
        });
        fileStream.on('error', (error) => {
            reject(`Erro ao adicionar conteúdo ao arquivo CSV: ${error.message}`);
        });
    });
}

module.exports = appendData;