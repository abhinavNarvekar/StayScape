const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
  console.log("Connected to DB");
}

main().catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data=initData.data.map((obj)=>({...obj,owner:"69b1516dc7b590c30af1ab8e"}));
  await Listing.insertMany(initData.data); // ✅ Use initData.data, not {initData}
  console.log("Data was initialised");
  mongoose.connection.close(); // optional: close connection after insrting
};

initDB();
