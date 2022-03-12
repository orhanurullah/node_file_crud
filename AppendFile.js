import fs from 'fs';
import writeFile from './WriteFile.js';

const appendFile = (filename, content) => {
    if(fs.existsSync(filename)){
        fs.readFile(filename, (err,data) => {
            if(err){
                console.log('OKUNAMADI.',err);
            }else{
                const fileData = JSON.parse(data);
                fileData.push(content);
                writeFile(filename, JSON.stringify(fileData));
            }
        });
    }else{
        console.log('Dosya YOK DAHA ABİCİM');
    }
}

export default appendFile;