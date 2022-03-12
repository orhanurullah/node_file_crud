import fs from 'fs';

const writeFile = (filename, content) => {
    fs.writeFile(filename, content, 'utf8', (err, data) => {
        if(err){
            console.log('Yazma işi olumsuz. ', err);
        }
    });
}
export default writeFile;