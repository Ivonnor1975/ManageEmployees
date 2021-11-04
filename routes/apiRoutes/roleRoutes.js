const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get all roles
router.get('/role', (req, res) => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Get single role
router.get('/role/:id', (req, res) => {
  const sql = `SELECT * FROM role WHERE id = ?`;
  const params = [parseInt(req.params.id)];
  console.log(params);
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Delete a role
router.delete('/role/:id', (req, res) => {
  const sql = `DELETE FROM role WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Party not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

// Create a role
router.post('/role', ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, 'title', 'salary', 'department_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO voters (title, salary, department_id) VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});
module.exports = router;
