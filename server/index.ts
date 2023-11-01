import * as express from "express";

const PORT = process.env.PORT || 3001;
const app = express();
const logos = [
    { image: "/assets/volvo.png" },
    { image: "/assets/volkswagen.png" },
    { image: "/assets/lamborghini.png" },
    { image: "/assets/skoda.png" },
    { image: "/assets/tesla.png" },
    { image: "/assets/bmw.png" },
    { image: "/assets/mercedes.png" },
    { image: "/assets/saab.png" },
];

app.use(express.json());

app.get('/api/getLogos', (req, res) => {
    res.send(logos);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});