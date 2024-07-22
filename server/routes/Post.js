const express = require('express');
const router = express.Router();
const pool = require('./db');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM personal_patient', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

// router.get('/personalPatient', (req, res) => {
//     pool.query('SELECT * FROM PERSONAL_PATIENT', (error, results) => {
//         if (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Internal Server Error' });
//             return;
//         }
//         res.json(results);
//     });
// });

router.get('/personalPatient_limit2', (req, res) => {
    pool.query('SELECT * FROM personal_patient WHERE idpersonal_patient = 2', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

module.exports = router;