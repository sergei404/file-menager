import zlib from "zlib";
import fs from "fs";

export function compressOrDecompress(command) {
  const path = command.split(' ')
  const readStream = fs.createReadStream(path[1]);
  const writeStream = fs.createWriteStream(path[2]);

  const brotli = zlib.createBrotliCompress();
  
  readStream.pipe(brotli).pipe(writeStream);
}