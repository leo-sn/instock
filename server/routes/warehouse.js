const express = require('express');
const app = express();
const router = express.Router(); // using routing to the server.js
const fs = require('fs');
const warehousesJSON = './data/warehouses.json'
const inventoryJSON = './data/inventories.json'
const cors = require('cors');
app.use(cors())

//unique id:
const uniqid = require('uniqid');

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

function writeWarehouse(data) {

    const newWarehouseData = (data);
    const oldWarehouseData = readWarehouse()

    console.log(oldWarehouseData)

    const toWrite = [...oldWarehouseData, newWarehouseData]
    fs.writeFileSync('./data/warehouses.json', JSON.stringify(toWrite))

}


//Creating new Warehouse in the databse
function createNewWarehouse(data) {

    const { name, address, city, country } = data;
    

    //Creating data obj
    const newWhse = {
        "id": uniqid(), //ADD NEW ID using uniqid library.
        "name": name,
        "address": address,
        "city": city,
        "country": country,
        "contact": {
            "name": data.contact.name,
            "position": data.contact.position,
            "phone": data.contact.phone,
            "email": data.contact.email
        }
    };

    //Writing new videos on database
    writeWarehouse(newWhse)
}

//**********************//
//*****  REQUESTS  *****//
//**********************//

//GET request to get all warehouses DATA
router.get('/', (_req, res) => {
    const warehouseData = readWarehouse();
    res.status(200).send(warehouseData)
})

//GET request to get specific warehouse data + inventory
router.get('/:id', (req, res) => {
    
    const warehouseInfo = getWarehouseInfo(requestedID(req))

    if(!warehouseInfo) {
        return res.status(400).send('Warehouse ID must be valid')
    }

    const inventory = getInventoryFromWarehouse(requestedID(req));
    const data = {...warehouseInfo, inventory}
    res.status(200).json(data)
})

//POST request handler to create a new warehouse
router.post('/',(req,res) => {

    createNewWarehouse(req.body);

    res.status(200).send('Warehouse created successfully!')

})

//EXPORTING
module.exports = router; // exporting this route