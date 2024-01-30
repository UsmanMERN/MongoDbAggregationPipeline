import { config } from "dotenv";
import connectDb from "./src/db/connectDb.js";
import app from "./app.js";

const port = process.env.PORT || 8080
config()

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`app is Listening of PORT ${port}`);
    })
})
