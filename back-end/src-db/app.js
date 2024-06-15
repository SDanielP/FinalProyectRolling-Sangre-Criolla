// const express = require('express');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
// const userRouter = require('./routes/userRouter');
// const connectDB = require('./config/db');
// const authRouter = require('./routes/authRouter');

// dotenv.config();

// const app = express();

// app.use(morgan('combined'));

// app.use(express.json());

// const port = process.env.PORT;
// //routes
// app.use('/', userRouter)

// app.use('/api/auth', authRouter)


// connectDB();

// console.log(port);
// app.listen(port, ()=>{
//     console.log('app corriendo en el puerto: ', port);
// })


require('dotenv').config();
console.log('MONGO_DB:', process.env.MONGO_DB); // Verifica que la variable de entorno se esté cargando correctamente
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');
const cors = require("cors");
const userRouter = require('./routes/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());

app.use(express.json());

// Base de datos
mongoose.connect(process.env.MONGO_DB)
.then(() => console.log('Conexión a MongoDB exitosa'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Ruta
app.use('/', productRouter);
app.use('/', userRouter);

app.get('/', function(req, res) {
    res.send('Hola Mundo!');
  });

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
