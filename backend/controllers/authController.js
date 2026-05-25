const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        
        if (rows.length === 0) return res.status(400).json({ msg: 'Tài khoản không tồn tại' });
        
        const user = rows[0];
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Sai mật khẩu' });

        const token = jwt.sign({ id: user.id, role: user.role }, 'SECRET_KEY', { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, full_name: user.full_name, role: user.role } });
    } catch (error) {
        res.status(500).json({ msg: 'Lỗi server' });
    }
};

module.exports = { login };