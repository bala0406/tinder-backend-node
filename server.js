import express, { request, response } from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

// App config
const app = express();
const port = process.env.PORT || 8000;
const url =
    "mongodb+srv://bala0406:abc@tinder.3zbpt.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
// API Endpoints
app.get("/", (request, response) => {
    response.status(200).send({ name: "hello world" });
});

app.post("/tinder/cards", (request, response) => {
    const dbCard = request.body;
    console.log();
    Cards.create(dbCard, (error, data) => {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(201).send(data);
        }
    });
});

app.get("/tinder/cards",(request,response) => {
    Cards.find((error,data) => {
        if(error){
            response.status(500).send(error);
        }else{
            response.status(201).send(data);
        }
    })
})
// Listeners
app.listen(port, () => console.log("listening on local host " + port));
