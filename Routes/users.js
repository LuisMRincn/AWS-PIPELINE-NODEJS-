const express = require('express');
const app = express();
const db = require('../DBConnetion/DB')

app.get('/users', (req, res) => {
    db.query("Select * from users", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
})

app.post("/users/add/", async (req, res) => {
      const newUsers = {
        name: req.body.name,
        numberphone: req.body.numberphone,
      };
   await db.query("INSERT INTO users set ?", [newUsers] ,(err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send({
                message: "Usuario anadido correctamente",
                code: 200,
        })
        }
            })
    })
    app.post("/users/update/:id", async (req, res) => {
        const{ id } = req.params;
        const { name, numberphone} = req.body
         await db.query(`UPDATE users set name = '${name}', numberphone = '${numberphone}' WHERE id = ${id}` ,(err) => {
          if (err) {
              console.log(err);
          }
          else {
              res.send({
                message: "Usuario editado correctamente",
                code: 200,})
               }
            })
      })

      app.delete("/users/delete/:id", async (req, res) => {
        const{ id } = req.params;
         await db.query(`DELETE FROM users WHERE id = ${id}` ,(err) => {
          if (err) {
              console.log(err);
          }
          else {
              res.send({
                message: "Usuario eliminado correctamente",
                code: 200,})
               }
            })
      })
module.exports = app;