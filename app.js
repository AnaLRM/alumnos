const mongoose =require('mongoose')
const url_db='mongodb://localhost:27017/utma' //llamar libreria

mongoose.connect(url_db)
.then(() => {
    console.log('Conexión exitosa')
})
.catch((err) => {
    console.log('no jalo')
})
const alumnos_esquema = new mongoose.Schema(
    {
      name: {
        type:String
      },
      apepat: {
        type:String
      },
      numerotel: {
        type:Number
      },
    }
)

const alumnos = new mongoose.model('tabla de registro de alumnos', alumnos_esquema)

alumnos.create(
    {
        name: 'jesús',
        apepat: 'Salazar',
        numerotel: 15926314
    }
)