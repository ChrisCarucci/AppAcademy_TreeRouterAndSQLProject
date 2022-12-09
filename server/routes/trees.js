// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.DATA_SOURCE, 
    sqlite3.OPEN_READWRITE
);

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
// Your code here

router.get('/', (req, res) => {
    sqlString = 'SELECT id, tree FROM trees ORDER BY height_ft DESC';
    const params = [];

    db.all(sqlString, params, (err, rows) => {
        if (err) {
            next(err)
        } else {
            res.json(rows)
        }
    })
});


/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
// Your code here

router.get('/:id', (req, res) => {
    sqlString = 'SELECT * FROM trees WHERE id = ?';
    params = [req.params.id];

    db.all(sqlString, params, (err, row) => {
        if (err) {
            next(err);
        } else {
            res.json(row);
        }
    })
});
/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
// Your code here

router.post('/:id', (req, res) => {
    const sql = `INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
    VALUES (?, ?, ?, ?)`;

const params = [
req.body.name,
req.body.location,
req.body.height,
req.body.size
];

    db.all(sqlString, params, (err) => {
        if (err) {
            next(err)
        } else {
            res.json({
                message: 'Success!'
        })
        }
    })
})

/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

router.delete('/trees/:id', (req, res, next) => {
    sqlString = " DELETE FROM trees WHERE id = ?";
    params = [
        req.params.id
    ]

    db.all(sqlString, params, (err) => {
        if (err) {
            next(err)
        } else {
            res.json({
                message: "Successfuly Deleted"
            })
        }

    })
})

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here

router.put('/trees/:id', (req, res, next) => {

    const sql = `UPDATE trees
    SET tree = ?,
    location = ?,
    height_ft = ?,
    ground_circumference_ft = ? WHERE id = ?`;

  const params = [
    req.body.name,
    req.body.location,
    req.body.height,
    req.body.size,
    req.body.id
  ]

  db.run(sql, params, (err) => {
    if (err) {
      next(err);
    } else {
      res.json({
        message: 'Success'
      })
    }
  })
});

// Export class - DO NOT MODIFY
module.exports = router;
