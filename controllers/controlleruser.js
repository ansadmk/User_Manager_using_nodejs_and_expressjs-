var db = require("../model/db.js");

module.exports = {
  fun: (req, res) => {
    res.sendFile(__dirname + "/" + "form.html");
  },
  post: (req, res) => {
    db.array.push(req.body);
    res.send("user added successfully ");
  },
  get: (req, res) => {
    res.json(db);
  },
  getUser: (req, res) => {
    console.log(req.params);
    res.json(db.array[req.params.id]);
  },
  put: (req, res) => {
    
    db.array[req.params.id]=req.body
    res.send("updated")
  },
  delete: (req, res) => {
    db.array.splice(req.params.id,1)
    res.send('deleted')
  },
};
