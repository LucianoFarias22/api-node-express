import 'dotenv/config';
import express from 'express';
import routesFrases from './routes/frases.js'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/frases', routesFrases);


try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en ' + PORT))
} catch (e) {
    console.log(e)
}