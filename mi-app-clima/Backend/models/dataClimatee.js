import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const EsquemaClimate = new mongoose.Schema(
    {
    city: String,
    temperature: Number,
    description: String,
    icon: String,
    date: String

    },
    {
        versionKey:false,
        timestamps: true
    }
)
EsquemaClimate.plugin(mongoosePaginate)
const Clima = mongoose.model('CiudadesBuscadas',EsquemaClimate)
export default Clima
