import fs from 'fs';

const appendFile = (filename, content) => {
    if(fs.existsSync(filename)){
        fs.appendFile(filename, ",\n" + content, 'utf8', (err) => {
            if(err){
                console.log('Ekleme Yapılamadı...' , err);
            }else{
                console.log('Ekleme TAMAM');
            }
        })
    }else{
        console.log('Dosya YOK DAHA ABİCİM');
    }
}

export default appendFile;