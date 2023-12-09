import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import Tire from "./report.js";

const app = express();


app.use(express.json());


app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to backend");
});

// Route for Get All tire reports from database

app.get('/tires', async (request, response) => {
    try {
      const tires = await Tire.find({});

      return response.status(200).json({
        count: tires.length,
        data: tires,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
});

// Route for Get One tire report from database by id
app.get('/tires/:id', async (request, response) => {
try {
    const { id } = request.params;

    const tire = await Tire.findById(id);

    return response.status(200).json(tire);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
