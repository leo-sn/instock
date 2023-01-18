//importing express and initializing it on data
const express = require('express');
const app = express();
//solving CORS:
const cors = require('cors');
app.use(cors())
//unique id:
// const uniqid = require('uniqid');
//reading/writting files
const fs = require('fs');
//using .env file:
// require('dotenv').config();
const PORT = process.env.PORT || 3030;


//importing the /routes route data
const warehouseRoute = require('./routes/warehouse')
const inventoryRoute = require('./routes/inventory')



//Middleware:
app.use(express.json());
app.use('/warehouse', warehouseRoute)
app.use('/inventory', inventoryRoute)



//**********************//
//***** START HERE *****//
//**********************//


//root access
app.get('/', (_req, res) => {
    res.status(200).send('Accessed root /')
})

//warehouse access
app.use('/warehouse', warehouseRoute)

//Listening for access on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});