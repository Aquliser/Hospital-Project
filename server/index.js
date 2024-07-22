const express = require('express');
const app = express();
const postRoutes = require('./routes/Post');
const loginUsers = require('./routes/login')
const register = require('./routes/register')
const province = require('./routes/address/province')
const cors = require('cors');

app.use(cors()); // เปิดใช้งาน CORS
app.use(express.json());
app.use('/post', postRoutes); // ใช้งานเส้นทางที่กำหนดใน Post.js ใน root path
app.use('/login', loginUsers); 
app.use('/register', register);
app.use('/province', province);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
