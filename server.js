const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json())

//local db connection
mongoose.connect("mongodb://localhost:27017/temp")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch(err =>{
    console.log("Error connecting to MongoDB")
});


//enabling CORS
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

//temp API to check we are able to get the response or not
app.get("/", (req, res)=>{
    res.send("Hello World")
})

//importing the model here so we can access the API from here.  Cycle would be like model-controller-router-server.js
const userRoutes = require('./src/routes/user.routes')
const todoRoutes = require('./src/routes/todo.routes')
const categoryRoutes = require('./src/routes/category.routes')
app.use("/",userRoutes)
app.use("/todo",todoRoutes)
app.use("/category",categoryRoutes)

const port = 3001;
app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`);
});