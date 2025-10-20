const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db')

dotenv.config();
const app = express()
app.use(express.json());
connectDB();

//ROUTES

app.use('/students', require("./routes/studentRoutes"));

//default route

app.get('/', (req, res) => {

    res.send("Api server for Express Js is up and running...");
});

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
