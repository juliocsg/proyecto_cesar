const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let rolesValidos = {
    values: ['USER_ROLE', 'ADMIN_ROLE'],
    message: '{VALUE} no es un rol válido'
}
let Schema = mongoose.Schema;
let CategoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'El nombre es necesario']
    }
});
/*CategoriaSchema.methods.ToJson(function () {
    let categoria = this;
    let categoriaObject = categoria.toObject();

})*/
module.exports = mongoose.model('Categoria', CategoriaSchema);