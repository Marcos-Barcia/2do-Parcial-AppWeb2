"use strict";
//importamos moongose como parte de la base de datos que se va a usar
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inversionista = void 0;
const mongoose_1 = require("mongoose");
const InversionistaSchema = new mongoose_1.Schema({
    id_inversionista: {
        type: String,
        required: [true, `El nombre del administrador es obligatorio`],
        unique: true
    },
    id_conceptoInversionista: {
        type: String,
        required: [true, `El nombre de usuario es obligatorio`],
        unique: true
    },
    valorInversion: {
        type: String,
        required: [true, `El correo es obligatorio`],
        unique: true
    },
    fecha: {
        type: String,
        required: [true, `La contraseña es obligatoria`],
        unique: true
    },
    duracionInversion: {
        type: String,
        required: [true, `La contraseña es obligatoria`],
        unique: true
    }
});
const Administrador = (0, mongoose_1.model)('Administrador', InversionistaSchema);
exports.Administrador = Administrador;
