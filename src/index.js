
// adding express library line 3 and 4 
const express = require('express');
const app = express()
require('dotenv').config();




//middlewares
app.use(express.json())

// middlewares routes
app.use("/api/users", require("./routes/user.routes"))

// middlewares routes
app.use("/api/movies", require("./routes/movie.routes"))

// server creation
app.listen(process.env.PORT, () => (
    console.log(`sesrvidor corriendo en puerto: ${process.env.PORT}`)
))