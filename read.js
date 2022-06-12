import fs from "fs";

export function read(command) {
  const path = command.split(' ')[1]
  fs.readFile(path, 'utf-8', (err, data) => {
      if (err) throw Error('FS operation failed');
      console.log(data)
  })
};