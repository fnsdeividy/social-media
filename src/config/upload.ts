
const path = require('path');
import multer from 'multer'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')

const uploadFile = {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    async filename(request, file, callback) {
      const data = file.originalname

      console.log('UPLOAD TO DISK')
      return callback(null, data);
    }
  }),
}

export { uploadFile }