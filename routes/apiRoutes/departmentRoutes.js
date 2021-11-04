const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get all department alphabetized by last name
router.get('/department', (req, res) => {
  const sql = `SELECT * FROM department ORDER BY name`;

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

// Create a department
router.post('/department', ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, 'first_name', 'last_name', 'email');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO voters (first_name, last_name, email) VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name, body.email];

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

// Update department name
router.put('/department/:id', (req, res) => {
  // Data validation
  const errors = inputCheck(req.body, 'name');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE department SET name = ? WHERE department = ?`;
  const params = [req.body.name, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'department not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Delete a department
router.delete('/department/:id', (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'department not found'
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

module.exports = router;