const mongodb = require("mongodb");

const getDb = require("../util/database").getDb;

class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed;
  }
  save() {
    const db = getDb();
    return db
      .collection("tasks")
      .insertOne(this)
      .then((result) => {
        console.log("Task added successfully");
      })
      .catch((err) => {
        console.log("fiald add task");
      });
  }
  static editById(taskId,task) {
    const db = getDb();
    return db
      .collection("tasks")
      .updateOne({ _id: new mongodb.ObjectID(taskId) }, { $set: task })
      .then((result) => {
        console.log("Edit done");
      })
      .catch();
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("tasks")
      .find()
      .toArray()
      .then((tasks) => {
        console.log("all tasks there", tasks);
        return tasks;
      })
      .catch();
  }
  static findById(taskId) {
    const db = getDb();
    return db
      .collection("tasks")
      .find({ _id: new mongodb.ObjectID(taskId) })
      .next()
      .then((task) => {
        console.log("all tasks there", task);
        return task;
      })
      .catch();
  }
  static deleteById(taskId) {
    const db = getDb();
    return db
      .collection("tasks")
      .deleteOne({ _id: new mongodb.ObjectID(taskId) })
      .then((result) => {
        console.log("Delelted");
      })
      .catch();
  }
}

module.exports = Task;
