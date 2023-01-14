const express = require('express');
const app = express();
const router = express.Router(); // using routing to the server.js
const fs = require('fs');
const warehousesJSON = './data/warehouses.json'
const inventoryJSON = './data/inventories.json'

//MIDDLEWARE
app.use(express.json());

//**********************//
//***** START HERE *****//
//**********************//

//***** FUNCTIONS ******/

//read files
function readWarehouse() {
    const warehouseFile = fs.readFileSync(warehousesJSON);
    const warehouseData = JSON.parse(warehouseFile)
    return warehouseData;
}

function readInventory() {
    const inventoryFile = fs.readFileSync(inventoryJSON);
    const inventoryData = JSON.parse(inventoryFile)
    return inventoryData;
}

//get the warehouse ID from URL
function requestedID (req) {
    return requestId = req.params.id
}

function getInventoryInfo(id) {

    const arr = []
    const data = readInventory()
    data.forEach(element => {
        if(element.id === id) {
            arr.push(element)
        }
    });

    return arr
}



//**********************//
//*****  REQUESTS  *****//
//**********************//

router.get('/', (_req, res) => {
    const inventoryData = readInventory();
    res.status(200).send(inventoryData)
})


router.get('/:id', (req, res) => {
    
    const inventoryInfo = getInventoryInfo(requestedID(req))

    if(!inventoryInfo) {
        return res.status(400).send('Item ID must be valid')
    }
    res.status(200).json(inventoryInfo)
})


//EXPORTING
module.exports = router; // exporting this route