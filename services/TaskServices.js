const connection = require("../database/mongo");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../config/.env") });

async function addNewTask(data) {
  const db = await connection();
  return new Promise((resolve, reject) => {
      const _id = require('../utils/common').asyncGenerateRandomId(9)
      data._id = _id
    db.collection("taskDoc").insertOne(data, (err, res) => {
      console.log(res);
      if (res.insertedCount > 0) {
        resolve(true);
      } else {
        let obj = {};
        obj.code = 503;
        obj.name = "datbase_server_error";
        obj.err = "Database server error" + err;
        reject(obj);
      }
    });
  });
}

async function updateTask(data) {
  const db = await connection();
  return new Promise((resolve, reject) => {
    db.collection("taskDoc").updateOne(
      { _id: data._id },
      { $set: data },
      (err, doc) => {
        console.log(doc);
        if (doc.matchedCount == 1) {
          resolve(true);
        } else {
          let obj = {};
          obj.code = 503;
          obj.name = "datbase_server_error";
          obj.err = "Database server error" + err;
          reject(obj);
        }
      }
    );
  });
}

async function getAllTask() {
  const db = await connection();
  return new Promise((resolve, reject) => {
    db.collection("taskDoc").find({}, (err, doc) => {
      if (!err) {
        resolve(doc);
      } else {
        let obj = {};
        obj.code = 503;
        obj.name = "datbase_server_error";
        obj.err = "Database server error" + err;
        reject(obj);
      }
    });
  });
}

async function deleteTask(_id) {
  const db = await connection();
  return new Promise((resolve, reject) => {
    db.collection("taskDoc").deleteOne({ _id: _id }, (err, doc) => {
      if (!err) {
        resolve(true);
      } else {
        let obj = {};
        obj.code = 503;
        obj.name = "datbase_server_error";
        obj.err = "Database server error" + err;
        reject(obj);
      }
    });
  });
}

module.exports = {
  addNewTask,
  getAllTask,
  updateTask,
  deleteTask,
};
