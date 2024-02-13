const express = require('express'); // import express
const router = express.Router(); // create router
const db = require('./connection'); // import DB connection

// insert data to DB
router.post('/testInsert', (req, res) => {
    // get data from req body
    const name = req.body.name;
    const marks = Number(req.body.marks);
    // insert query
    const query = `INSERT INTO testTable1 (name,marks) VALUES (${db.escape(name)},${marks})`
    //execute insert query
    db.query(query, (err, result) => {
        if (err) return console.log(err);
        console.log("1 record inserted");
    });
});

// get data from DB
router.get('/testSelect', (req, res) => {
    // select query
    const query = 'SELECT * FROM testtable1'
    // execute select query
    const result = db.query(query, (err, result) => {
        if (err) return console.log(err);
        console.log(result); // display fetched data in terminal
        res.send(result); // send data fetched data as response
    });
});

// update data record in DB
router.post('/testUpdate', (req, res) => {
    // get data from req body
    const id = Number(req.body.id);
    const name = req.body.name;
    const marks = Number(req.body.marks);
    //update query
    const query = `UPDATE testtable1 SET name=${db.escape(name)}, marks=${marks} WHERE id=${id}`;
    //execute update query
    db.query(query, (err, result) => {
        if (err) return console.log(err);
        console.log('record updated');
    });
});

// delete data record in DB
router.post('/testDelete', (req, res) => {
    // get data from req body
    const id = Number(req.body.id);
    // delete query
    const query = `DELETE FROM testtable1 WHERE id=${id};`
    // execute delete query
    db.query(query, (err, result) => {
        if (err) console.log(err);
        console.log("Delete");
    })
});

module.exports = router;