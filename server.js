const app = require("./app");

const PORT = process.env.PORT || "http://localhost:5005";

app.listen(PORT, () => console.log(`Port is listening on port: ${PORT}`));
