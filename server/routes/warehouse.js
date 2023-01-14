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

//get all inventory for specific warehouse
function getInventoryFromWarehouse(id) {
    const arr = []
    const data = readInventory()
    data.forEach(element => {
        if(element.warehouseID === id) {
            const obj = {
                itemId: element.id,
                itemName: element.itemName,
                itemCategory: element.category,
                itemStatus: element.status,
                itemQuantity: element.quantity
            }
            arr.push(obj)
        }
    });
    
    return arr
}

function getWarehouseInfo(warehouseId) {
   const warehouseData = readWarehouse();
   const result = warehouseData.find( ({id}) => id === warehouseId)

   return result
}



//***** REQUESTS ******/
router.get('/', (_req, res) => {
    const warehouseData = readWarehouse();
    res.status(200).send(warehouseData)
})


router.get('/:id', (req, res) => {
    
    const warehouseInfo = getWarehouseInfo(requestedID(req))

    if(!warehouseInfo) {
        return res.status(400).send('Warehouse ID must be valid')
    }

    const inventory = getInventoryFromWarehouse(requestedID(req));
    const data = {...warehouseInfo, inventory}
    res.status(200).json(data)
})

//EXPORTING
module.exports = router; // exporting videos