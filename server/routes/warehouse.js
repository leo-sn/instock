const express = require('express');
const app = express();
const router = express.Router(); // using routing to the server.js
const fs = require('fs');
const warehousesJSON = './data/warehouses.json'

//MIDDLEWARE
app.use(express.json());

//**********************//
//***** START HERE *****//
//**********************//

//read files
function readWarehouse() {
    const warehouseFile = fs.readFileSync(warehousesJSON);
    const warehouseData = JSON.parse(warehouseFile)
    return warehouseData;
}

router.get('/', (_req, res) => {
    warehouseData = readWarehouse();
    res.status(200).send(warehouseData)
})


//EXPORTING
module.exports = router; // exporting videos