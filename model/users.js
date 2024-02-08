const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      require: true,
    },
    LastName: {
      type: String,
    },
    Email: {
      type: String,
      require: true,
      unique: true,
    },
    Phone: {
      type: String,
      require: true,
    },
    JobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserSchemaModel = mongoose.model("Users", UserSchema);

module.exports = UserSchemaModel;
