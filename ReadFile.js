import fs from "fs";

const readFile = (filename) => {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.log("Dosya Okunamadı.");
    } else {
      console.log(data);
    }
  });
};

export default readFile;
