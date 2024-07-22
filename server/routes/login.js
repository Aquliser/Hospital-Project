const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM PERSONAL_PATIENT', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});
router.get('/PatientLogin/:id', (req, res) => {
    const ids = req.params.id.split(','); // แยกค่า ids ที่ถูกส่งมาแบ่งด้วย ','
    // ใช้ ids ในการดึงข้อมูลจากฐานข้อมูล MySQL
    pool.query('SELECT * FROM PERSONAL_PATIENT WHERE idPersonal_patient IN (?)', [ids], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});


module.exports = router;