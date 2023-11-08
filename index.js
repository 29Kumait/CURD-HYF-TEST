import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("[TEST]!");
  res.send("Hello from Homepage.");
});

app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`)
);

export default app;

// if (require.main === module) {
//   // This block will be executed only if this file is run directly (i.e., not imported as a module)
//   app.listen(PORT, () =>
//     console.log(`Server Running on port: http://localhost:${PORT}`)
//   );
// }

// export default app;
