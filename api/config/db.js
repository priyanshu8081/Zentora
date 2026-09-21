import mongoose from "mongoose"

const dbconnect = async () => {
    const con = await mongoose.connect(process.env?.MONGO_URI);
    if (con) {
        console.log('database connected successfully');

    }
}
export default dbconnect