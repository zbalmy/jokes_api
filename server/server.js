//import all the dependencies
const express = require("express");
const app = express();
const port = 8000;
const db_name = "jokes_db";

//config the mongoose
require("./config/mongoose.config")(db_name);

//express config for posting data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
const Routes = require("./routes/jokes.routes");
Routes(app);

// listen to the port - this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
