const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("validate", (req, res) => {
  const inputNumber = req.body.inputNumber;
  if (!isNaN(inputNumber)) {
    res.json({valid: true});
  } else {
    res.json({valid: false});
  }
});

app.post("/execute", (req, res) => {
  const {operation} = req.body;
  const InputNumber = req.body.number;
  if (operation === "generateOddNumber") {
    const oddNumbers = InputNumber % 2 !== 0;
    res.json({result: oddNumbers});
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
