const {MongoClient} = require('mongodb')
const path = require('path')
const envPath = path.join(__dirname, '../config/.env')
console.log("env path",envPath)
require('dotenv').config({path : envPath})
const URI  = process.env.ATLAS_URI

const client = new MongoClient(URI)

module.exports = async function connection()
{
    try{
        await client.connect()
        .then(()=>
        {
            console.info('Database connection established')
        })
        .catch((err)=>
        {
            console.log("Database connection failed - ",err)
        })
        const db = await client.db('taskDB')
        return db
    }catch(e)
    {
        console.error('Runtime error occurred while establishing database connection',e)
    }
  
}

// connection()