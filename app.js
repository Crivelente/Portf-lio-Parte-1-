import express from 'express';
import path from 'path'
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(path.resolve(),'public')));

app.listen(PORT);