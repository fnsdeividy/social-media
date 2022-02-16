import mongoose from 'mongoose'

const mongoUri: string = 'mongodb://localhost:27017/social-media'

mongoose.connect(mongoUri)

export default mongoose