const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require("dotenv")
const { readdirSync } = require("fs")
const PORT = process.env.PORT || 8000


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json())

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));


//database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
}).then(() => console.log("Database connected successfully")).catch((err) => console.log("error connecting to mongodb", err))




app.listen(PORT, function () {
    console.log(`server is running at Port:${PORT}`);
})
