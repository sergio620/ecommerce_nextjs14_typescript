import mongoose from "mongoose";
/* interface shoe {
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
} */
const shoeSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    reviews: {
      type: String,
      required: true,
    },

    prevPrice: {
      type: String,
      required: true,
    },
    newPrice: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //when we try to create a new document it automactically tell us when it was created, last updated https://mongoosejs.com/docs/timestamps.html
);

export const Shoe = mongoose.models.shoe || mongoose.model("shoe", shoeSchema);
