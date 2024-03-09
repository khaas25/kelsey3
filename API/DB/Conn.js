var mongoose = require("mongoose");
// connects you to mongo, every library comes from node_mondules
mongoose
  .connect("mongodb://0.0.0.0:27017/kelsey-3")
  // get connection string in quotations from opening mongo and
  // copying URI then naming the last part what you want and that is ur database name
  .then(() => {
    console.log("Connected with Database");
  })
  .catch((e) => {
    console.log(e);
  });
// then catch is exception handling
