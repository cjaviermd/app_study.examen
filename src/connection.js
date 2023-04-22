const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("bd_study_app", 'postgres', 'admin1', { //el admin1 ahi seria mi contrasenha del postgre
    host : 'localhost',
    port : 5433,
    dialect : 'postgres'
});

const testConnection = function(){
    try {
        sequelize.authenticate();
        console.log("Conectado con exito!!");
    } catch (error) {
        console.log("Error de conexion", error);
    }
}

testConnection();

module.exports = {
    Sequelize,
    sequelize
}