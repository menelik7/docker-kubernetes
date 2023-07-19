const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("How is Docker treating you?");
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
	console.log("Listening on port", PORT);
});
