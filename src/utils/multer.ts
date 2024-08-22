import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!req.session.user) {
      return cb(new Error('User not authenticated'), '')
    }
    cb(null, path.resolve(__dirname, '../../public/uploads'))
  },
  filename: (req, file, cb) => {
    if (!req.session.user) {
      return cb(new Error('User not authenticated'), '')
    }
    cb(null, req.session.user.id + '_' + Date.now() + path.extname(file.originalname))
  }
})

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowMimeTypes = ['image/jpeg', 'image/png', 'image/jpg']
  if (allowMimeTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage: storage, fileFilter })
export default upload
