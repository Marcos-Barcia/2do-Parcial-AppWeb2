//importamos moongose como parte de la base de datos que se va a usar

//Importamos IAdministrador de la carpeta de interfaces
import mongoose,{Mongoose} from "mongoose";
import { Schema, model } from "mongoose";
import { Iinversionstas } from "../interfaces";

const InversionistaSchema: mongoose.
Schema = new Schema<Iinversionstas>({
    id_inversionista:{
        type: String,
        required: [true, `La id del inversionista es obligatoria`],
        unique: true
    },
    id_conceptoInversionista: {
        type: String,
        required:[true, `La id del concepto inversionista es obligatoria`],
        unique: true
    },
    fecha: {
        type: String,
        required: [true, `La fecha es obligatoria`],
        unique: true
    },
    valorInversion:{
        type: String,
        required:[true, `El valor es obligatorio`],
        unique: true
    },
    duracionInversion:{
        type: String,
        required:[true, `Los dias de duracion de la inversion son obligatorios`],
        unique: true
    }
    }

)
const Inversionista: mongoose.Model<Iinversionstas> = model<Iinversionstas>
('Inversionista', InversionistaSchema);

export{
    Inversionista
}
