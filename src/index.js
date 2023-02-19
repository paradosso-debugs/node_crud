
// adding express library line 3 and 4 
const express = require('express');
const app = express()
const port = 3000



//middlewares
app.use(express.json())

// middlewares routes
app.use("/api/users", require("./routes/user.routes"))

// server creation
app.listen(port, () => (
    console.log(`sesrvidor corriendo en puerto: ${port}`)
))