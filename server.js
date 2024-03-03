import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config({"path":"./config.env"})

import {router} from "./routers/router.js"

let app = express();

let port = process.env.PORT

//npm i body-parser.
app.use(bodyParser.json());

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port} | http://localhost:${port}`);
}); //this is an hight order function who accept a callback as an arugment {OSImodul}{TCPIP Family}.



