const express = require('express');
const router = express.Router();
const pool = require('./db');

router.post('/', (req, res) => {
    const { personal_id, email, hospital_name, hospital_id, province, selectedDistrict, prename, name, lastname, sex, birthday, position, level, agency, phone_number, phone_number_agency, password } = req.body;

    // ตรวจสอบว่าข้อมูลสมบูรณ์หรือไม่
    //if (!idUser || !personal_id || !email || !hospital_name || !hospital_id || !province || !district || !prename || !name || !lastname || !sex || !birthday || !position || !level || !agency || !phone_number || !phone_number_agency || !password) {
    //    return res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    //}

    // ทำการเพิ่มข้อมูลผู้ใช้ลงในฐานข้อมูล
    pool.query(`
        INSERT INTO user
        (personal_id, email, hospital_name, hospital_id, province, district, prename, name, lastname, sex, birthday, position, level, agency, phone_number, phone_number_agency, password) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
    [personal_id, email, hospital_name, hospital_id, province, selectedDistrict, prename, name, lastname, sex, birthday, position, level, agency, phone_number, phone_number_agency, password], 
    (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการลงทะเบียนผู้ใช้' });
        }
        res.status(201).json({ message: 'ลงทะเบียนผู้ใช้เรียบร้อยแล้ว' });
    });
});


module.exports = router;