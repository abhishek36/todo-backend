const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/temp")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch(err =>{
    console.log("Error connecting to MongoDB")
});

enableCORS(app);
app.use(cors());
function enableCORS(expressInstance) {
    expressInstance.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, timeZone"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS, PATCH"
      );
      next();
    });
}

app.get("/", (req, res)=>{
    res.send("Hello World")
})

const todoRoutes = require('./src/routes/todo.routes')
app.use("/todo",todoRoutes)

const port = 3001;
app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
});