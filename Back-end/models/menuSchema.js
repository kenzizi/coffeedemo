const mongoose = require("mongoose");
const Menu = mongoose.Schema(
  {
    menuName: { type: String },
    menuItems: [
      {
        itemName: { type: String, required: true },
        itemDetails: [
          {
            price: Number,
            size: { type: String, default: "default" },
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", Menu, "Menu");
