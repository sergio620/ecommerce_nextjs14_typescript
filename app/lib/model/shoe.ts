import mongoose from "mongoose";
//Please note that extending Document is discouraged by mongoose devs.
//https://stackoverflow.com/questions/34482136/mongoose-the-typescript-way
//use this official guide https://mongoosejs.com/docs/typescript.html
//https://www.geeksforgeeks.org/what-is-the-difference-between-string-and-string-in-typescript/
//https://github.com/saidMounaim/Auth-TS/blob/main/models/User.ts
interface IUser {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  avatar?: string;
  createdAt: NativeDate;
  updatedAt: NativeDate;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      //https://masteringjs.io/tutorials/mongoose/unique
      //https://masteringjs.io/tutorials/mongoose/e11000-duplicate-key
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } //when we try to create a new document it automactically tell us when it was created, last updated https://mongoosejs.com/docs/timestamps.html
);

const User = mongoose.model("shoe", userSchema);

export default User;
