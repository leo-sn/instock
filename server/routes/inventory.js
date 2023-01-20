const express = require('express');
const app = express();
const router = express.Router(); // using routing to the server.js
const fs = require('fs');
const warehousesJSON = './data/warehouses.json'
const inventoryJSON = './data/inventories.json'

const uniqid = require('uniqid');

//MIDDLEWARE
app.use(express.json());

//**********************//
//***** START HERE *****//
//**********************//

//***** FUNCTIONS ******/

//read files WarehouseJSON and InventoriesJSON
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

//Get inventory information from a specific item ID
function getInventoryInfo(id) {

    let arr = []
    const data = readInventory()
    data.forEach(element => {
        if(element.id === id) {
            arr.push(element)
        }
    });

    if(arr.length === 0) {
        return false
    }

    return arr
}

// write new data into the inventory.
function writeInventoryItem(data) {

    const newInventoryData = (data);
    const oldInventoryData = readInventory()


    const toWrite = [...oldInventoryData, newInventoryData]
    fs.writeFileSync('./data/inventories.json', JSON.stringify(toWrite))

}

//find warehouse ID by its name
function getWarehouseIdByName(warehouseName) {

    const warehouseData = readWarehouse()
    const warehouseInfo = warehouseData.find(e => e.name === warehouseName)
    const warehouseID = warehouseInfo.id

    return warehouseID
}

//Creating new Warehouse in the databse
function createNewInventoryItem(data) {

    //Creating data obj
    const newItem = {
        "id": uniqid(),
        "warehouseID": getWarehouseIdByName(data.warehouseName),
        "warehouseName": data.warehouseName,
        "itemName": data.itemName,
        "description": data.description,
        "category": data.category,
        "status": data.status,
        "quantity": data.quantity
    };

    //Writing new videos on database
    writeInventoryItem(newItem)
}

function updateInventoryItem(data, idToUpdate) {

    const database = readInventory();

    database.find((element, index) => {

        if(element.id === idToUpdate) {

            database[index] = 
            {
                id: idToUpdate,
                warehouseID: getWarehouseIdByName(data.warehouseName),
                warehouseName: data.warehouseName,
                itemName: data.itemName,
                description: data.description,
                category: data.category,
                status: data.status,
                quantity: data.quantity
            }      

            const newInventoryData = database;
            const toWrite = newInventoryData
            fs.writeFileSync('./data/inventories.json', JSON.stringify(toWrite))
        }
    })
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

router.post('/',(req,res) => {

    createNewInventoryItem(req.body);
    res.status(200).send('Item added to inventory successfully!')

})

router.put('/:id',(req,res) => {
    updateInventoryItem(req.body, requestedID(req))
    res.status(200).send('Item updated successfully!')
})

//EXPORTING
module.exports = router; // exporting this route