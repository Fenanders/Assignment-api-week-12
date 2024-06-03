const express = require('express');
const app = express();

const jadwalRouter = require('./routers/jadwalRoute');
const beliTiketRouter = require('./routers/tiketRoute');
const bangkuRouter = require('./routers/bangkuRoute');

app.use('/jadwal-kereta', jadwalRouter);
app.use('/beli-tiket', beliTiketRouter);
app.use('/bangku-data', bangkuRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});