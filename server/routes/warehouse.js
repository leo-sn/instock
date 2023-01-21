const express = require('express');
const app = express();
const router = express.Router(); // using routing to the server.js
const fs = require('fs');
const warehousesJSON = './data/warehouses.json'
const inventoryJSON = './data/inventories.json'
const cors = require('cors');
const fsPromise = require('node:fs/promises')
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

    //Writing new warehouse on database
    writeWarehouse(newWhse)
}


function updateWarehouseData(data, idToUpdate) {

    const database = readWarehouse();

    const { name, address, city, country} = data;
    console.log(data)


    database.find((element, index) => {

        if(element.id === idToUpdate) {
            database[index] = 
            {
                "id": idToUpdate,
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

            const newWarehouseData = database;
            const toWrite = newWarehouseData
            fs.writeFileSync('./data/warehouses.json', JSON.stringify(toWrite))
        }
    })

}

function deleteWarehouse(idToDelete) {

    const whseDatabase = readWarehouse();
    for(i=0; i < whseDatabase.length; i++) {
        if(whseDatabase[i].id === idToDelete) {
            whseDatabase.splice(i, 1)
            break
        }
    }

    const inventoryDatabase = readInventory();

    let newInventoryDatabse = inventoryDatabase.filter(e => {
        if(e.warehouseID !== idToDelete){
            return true
        }
    })


    let success = false;

    // This way of writting file garantee that if an erro happens nothing gets overwritten.
    return fsPromise.writeFile('./data/inventories.json', JSON.stringify(newInventoryDatabse))
    .then((error) => {
        console.log('first await')
        if(error) {
            return false
        } else {
            return fsPromise.writeFile('./data/warehouses.json', JSON.stringify(whseDatabase)).then((error) => {
                
                if(error) {
                    fs.writeFileSync('./data/inventories.json', JSON.stringify(inventoryDatabase))

                } else {
                    console.log('success worked till here')
                    success = true
                    return success
                }
            })
        }}
    )
    
    // This is the simplistic way of writing the file
    // fs.writeFileSync('./data/inventories.json', JSON.stringify(newInventoryDatabse))
    // fs.writeFileSync('./data/warehouses.json', JSON.stringify(whseDatabase))
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

//PUT request handler to edit an existing warehouse
router.put('/:id',(req,res) => {

    if(getWarehouseInfo(requestedID(req))){
        updateWarehouseData(req.body, requestedID(req))
        return res.status(200).send('Item updated successfully!')
    } else {
        res.status(400).send('Warehouse does not exist!')
    }
})

router.delete('/:id',(req,res) => {

    if(getWarehouseInfo(requestedID(req))){
        deleteWarehouse(requestedID(req)).then((success) => {
            
            console.log('route returning: ',success)
            if(success === true){
                return res.status(200).send('aaaaaaaaaaand it is gone....!')
            } else {
                res.status(400).send('The system fucked up :(');
            }
        })

    } else {
        res.status(400).send('Warehouse does not exist.')
    }
})


//EXPORTING
module.exports = router; // exporting this route