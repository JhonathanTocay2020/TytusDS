const express = require('express');
const app = express();
const morgan = require('morgan');


//empezando el servidor
app.use(morgan('dev'));
app.use(express.urlencoded({extended = false}));
app.use(express.json());

app.use(require('index'));
app.use(require('/api/lista','./Paginas/Estructuras_Lineales/Lista Simple/lista_simplemente_enlazada'));
app.listen(3000,()=>{
    console.log(`Server on port ${3000}`);
});
