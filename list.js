import fs from "fs";

export function list() {
  fs.readdir(process.cwd(), (err, items) => {
    if (err) console.log(err.message);

    console.log(items);
  });
}
