const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Dialogflow Request:", req.body);

    // Extract the intent name
    const intentName = req.body.queryResult.intent.displayName;

    let responseText = "I didn't understand that.";

    if (intentName === "CurrentTimeIntent") {
        responseText = `The current time is ${new Date().toLocaleTimeString()}`;
    }

    res.json({
        fulfillmentText: responseText,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
