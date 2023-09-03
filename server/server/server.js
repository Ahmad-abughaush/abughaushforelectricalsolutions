require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbURI = "mongodb+srv://ahmedabughoshh:admin@cluster0.leatrkm.mongodb.net/?retryWrites=true&w=majority";
const userRouter = require('./routes/userrouter')
const serviceRouter = require('./routes/sevicerouter')
const itemRouter = require('./routes/itemrouter')
const orderrouter= require('./routes/orderrouter')
const app = express();
const PORT = 5000


app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});




app.use(userRouter);
app.use(serviceRouter);
app.use(itemRouter);
app.use(orderrouter);



module.exports = {
    server: app,
    start: () => {
        mongoose
            .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                app.listen(PORT, () => {
                    console.log(`Starting server on port ${PORT}`);
                });
            })
            .catch((error) => console.error('Error in starting server', error))
    },
};


