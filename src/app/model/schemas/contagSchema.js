import mongoose from 'mongoose'

const contagSchema = new mongoose.Schema(
    {
        title: { type: String, require: true },
      
    }
)

const contag = mongoose.model('contag', contagSchema, 'campaigns')
export default contag