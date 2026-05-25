const db = require('../config/db');

const getJobs = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM jobs ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ msg: 'Lỗi khi lấy danh sách công việc' });
    }
};

module.exports = { getJobs };