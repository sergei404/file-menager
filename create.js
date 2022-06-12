import fs from 'fs';

export const create = async (command) => {
  const path = command.split(' ')[1]
    fs.writeFile(path, 'I am fresh and young', (err) => {
      if (err) {
        console.log(err.message);
      }
    })
};