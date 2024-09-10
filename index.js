import express from "express";
import bodyParser from "body-parser";

export const app = express();
import userRoutes from "./routes/users.js";

const PORT = 5555;
app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});

app.listen(PORT, () => {
  console.log(`server running on port: http//:localhost/${PORT}`);
});
