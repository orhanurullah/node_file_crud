import fs from 'fs';

const deleteFile = (filename) => {
    if(fs.existsSync(filename)){
        fs.unlink(filename, (err) => {
            if(err){
                console.log('Dosya silinemedi. ', err);
            }else{
                console.log('Dosya silindi');
            }
        })
    }else{
        console.log('Olmayan Dosyayı Silemezsin');
    }
}

export default deleteFile;