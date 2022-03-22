const mongoose = require("mongoose");
module.exports = (db_name) => {
  mongoose
    .connect(
      `mongodb+srv://zbalmy:Twinchick2!@cluster0.bv09f.mongodb.net/${db_name}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};
