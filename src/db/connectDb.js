import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const instance = await mongoose.connect(process.env.DB_URL)
        console.log("database is connected ....! on host" + instance.connection.host);
    } catch (error) {
        console.error("someThing went wrong while connecting DB " || error.message);
    }
}
export default connectDb