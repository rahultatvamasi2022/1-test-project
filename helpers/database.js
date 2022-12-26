import mongoose from "mongoose";

export default () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`Database connected => ${data.connection.host}`)
    )
    .catch((error) => {
      console.log("Connection error", error);
      process.exit(1);
    });
};
